import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks";
import { SingleProduct as SingleProductProps } from "../../models/products/singleProduct";
import { addToCart } from "../../services/cart";
import { getProduct } from "../../services/products";
import { SingleProduct as ProductPage, SingleProduct } from "./SingleProduct";
type SingleProductPageTypes = {
  product: ProductProps;
  alert: StateAlert;
  addProduct: () => void;
};
interface ProductProps {
  isLoading: boolean;
  product: {
    error: boolean;
    data?: SingleProductProps;
  };
}
interface StateAlert {
  open: boolean;
  vertical: "bottom" | "top";
  horizontal: "right" | "left" | "center";
  message: string;
  title: string;
  error: boolean;
  close: () => void;
}
export const SingleProductPageContext = createContext(
  {} as SingleProductPageTypes
);

export const SingleProductPage = () => {
  const TOKEN = useAppSelector((state) => state.users.session.data.token);

  const { code } = useParams();
  const [product, setProduct] = useState<ProductProps>({
    isLoading: true,
    product: { error: false },
  });
  const [alert, setAlert] = useState<StateAlert>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
    title: "",
    error: false,
    close: () => handleCloseAlert(),
  });
  const addProduct = async () => {
    if (product.product.data) {
      const { status } = await addToCart(TOKEN, product.product.data?.id);
      if (status !== 200) {
        return setAlert({
          ...alert,
          open: true,
          message: "No se ha podido agregar al carrito!",
          title: "Error!",
          error: true,
        });
      }
      return setAlert({
        ...alert,
        open: true,
        message: "Product agregado al carrito!",
        title: "Exito!",
        error: false,
      });
    }
  };
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  const productsData = useCallback(
    async (controller: AbortController) => {
      let productsResponse: { status: number; data?: SingleProductProps } = {
        status: 404,
      };
      if (code) {
        productsResponse = await getProduct({ controller, code });
      }
      if (productsResponse.status !== 200) {
        return { error: true };
      }
      const add = productsResponse.data;
      return { error: false, data: add };
    },
    [code]
  );

  const dataController = useCallback(
    async (controller: AbortController) => {
      const productCleaned = await productsData(controller);
      setProduct({
        isLoading: false,
        product: productCleaned,
      });
    },
    [productsData]
  );

  useEffect(() => {
    const controller = new AbortController();
    if (product.isLoading) {
      dataController(controller);
    }

    return () => {
      controller.abort();
    };
  }, [dataController, product.isLoading]);

  return (
    <SingleProductPageContext.Provider
      value={{
        product,
        alert,
        addProduct,
      }}
    >
      <SingleProduct />
    </SingleProductPageContext.Provider>
  );
};

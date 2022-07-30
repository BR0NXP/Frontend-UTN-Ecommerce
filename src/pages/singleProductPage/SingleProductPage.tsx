import { createContext, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../../models/products/singleProduct";
import { getProduct } from "../../services/products";
import { SingleProduct as ProductPage } from "./SingleProduct";
type ProductPageTypes = {
  product: ProductProps;
};
interface ProductProps {
  isLoading: boolean;
  product: {
    error: boolean;
    data?: SingleProduct;
  };
}
export const ProductPageContext = createContext({} as ProductPageTypes);

export const SingleProductPage = () => {
  const { code } = useParams();
  const [product, setProduct] = useState<ProductProps>({
    isLoading: true,
    product: { error: false },
  });

  const productsData = useCallback(
    async (controller: AbortController) => {
      let productsResponse: { status: number; data?: SingleProduct } = {
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
    <ProductPageContext.Provider
      value={{
        product,
      }}
    >
      <ProductPage />
    </ProductPageContext.Provider>
  );
};

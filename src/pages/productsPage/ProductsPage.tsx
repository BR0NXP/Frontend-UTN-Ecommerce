import { createContext, useCallback, useEffect, useState } from "react";
import { Row } from "../../models/products/allProducts";
import { getAllProducts } from "../../services/products";
import { Products } from "./Products";
type ProductsPageTypes = {
  products: ProductsProps;
};
interface ProductsProps {
  isLoading: boolean;
  products: {
    error: boolean;
    data: Row[];
  };
}
export const ProductsPageContext = createContext({} as ProductsPageTypes);

export const ProductPage = () => {
  const [products, setProducts] = useState<ProductsProps>({
    isLoading: true,
    products: { error: false, data: [] },
  });

  const productsData = useCallback(async (controller: AbortController) => {
    const productsResponse = await getAllProducts({ controller });
    if (productsResponse.status !== 200) {
      return { error: true, data: [] };
    }
    const add = productsResponse.data;
    return { error: false, data: add };
  }, []);

  const dataController = useCallback(
    async (controller: AbortController) => {
      const productsCleaned = await productsData(controller);
      setProducts({
        isLoading: false,
        products: productsCleaned,
      });
    },
    [productsData]
  );

  useEffect(() => {
    const controller = new AbortController();
    if (products.isLoading) {
      dataController(controller);
    }

    return () => {
      controller.abort();
    };
  }, [dataController, products.isLoading]);

  return (
    <ProductsPageContext.Provider
      value={{
        products,
      }}
    >
      <Products />
    </ProductsPageContext.Provider>
  );
};

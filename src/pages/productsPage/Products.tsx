import React, { useContext } from "react";
import { ProductsPageContext } from "./ProductsPage";

export const Products = () => {
  const { products } = useContext(ProductsPageContext);
  console.log(products);
  return <div>Products</div>;
};

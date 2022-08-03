import React, { useContext } from "react";
import ProductCard from "../../components/app/homePage/ProductCard";
import { ProductsPageContext } from "./ProductsPage";

export const Products = () => {
  const { products } = useContext(ProductsPageContext);
  console.log(products);
  return (
    <>
      <ProductCard />
    </>
  );
};

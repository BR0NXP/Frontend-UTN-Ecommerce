import { useContext } from "react";
import { ProductPageContext } from "./SingleProductPage";

export const SingleProduct = () => {
  const { product } = useContext(ProductPageContext);
  console.log(product);
  return <div>singleProduct</div>;
};

import { Box } from "@mui/material";
import { useContext } from "react";
import { ProductsPageContext } from "../../../pages";
import { ProductCard } from "../../commons/cards";

export const ProductsContainer = () => {
  const { products } = useContext(ProductsPageContext);

  return (
    <Box>
      {products.products?.data.map((product) => (
        <ProductCard title={product.name} key={product.code} />
      ))}
    </Box>
  );
};

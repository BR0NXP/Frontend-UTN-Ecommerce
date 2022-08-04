import { Box } from "@mui/material";
import { useContext } from "react";
import { ProductsContainer } from "../../components/app/productsPage";
import { ProductsPageContext } from "./ProductsPage";

export const Products = () => {
  const { products } = useContext(ProductsPageContext);
  console.log(products);
  if (products.isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <ProductsContainer />
    </Box>
  );
};

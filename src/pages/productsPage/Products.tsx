import { Box, Typography } from "@mui/material";
import { useContext } from "react";
import { ProductsContainer } from "../../components/app/productsPage";
import { ProductsPageContext } from "./ProductsPage";

export const Products = () => {
  const { products, productName } = useContext(ProductsPageContext);
  console.log(products);
  if (products.isLoading) {
    return <div>Cargando...</div>;
  }
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography
          variant="h1"
          sx={{
            margin: 0,
            fontSize: "22px",
            textAlign: "center",
          }}
        >
          Resultados relacionados a: {productName}
        </Typography>
      </Box>
      <ProductsContainer />
    </Box>
  );
};

import { Grid } from "@mui/material";
import { useContext } from "react";
import { ProductsPageContext } from "../../../pages";
import { ProductCard } from "../../commons/cards";
export const ProductsContainer = () => {
  const { products } = useContext(ProductsPageContext);

  return (
    <Grid
      container
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {products.products?.data.map((product) => (
        <Grid
          item
          key={product.code}
          sm={12}
          md={6}
          lg={3}
          sx={{
            alignContent: "center",
            justifyContent: "center",
            display: "inherit",
            margin: "2rem 0 0 0",
          }}
        >
          <ProductCard title={product.name} code={product.code} />
        </Grid>
      ))}
    </Grid>
  );
};

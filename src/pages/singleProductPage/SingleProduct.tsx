import { Box, CardMedia, Grid } from "@mui/material";
import { useContext } from "react";
import { DataProduct } from "../../components/app/singleProductPage";
import { SnackbarMessage } from "../../components/commons/snackbars";
import { SingleProductPageContext } from "./SingleProductPage";

export const SingleProduct = () => {
  const { product, alert } = useContext(SingleProductPageContext);
  console.log(product);
  return (
    <Box>
      <Grid container sx={{ padding: "2rem 0" }}>
        <Grid
          item
          sm={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "80%" }}>
            <CardMedia
              sx={{ border: "1px solid black" }}
              component="img"
              image="https://dummyimage.com/400x400/fff/aaa"
              alt={product.product.data?.name}
            />
          </Box>
        </Grid>
        <Grid item sm={12} md={6}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
            spacing={2}
          >
            <DataProduct />
          </Grid>
        </Grid>
      </Grid>
      <SnackbarMessage
        open={alert.open}
        vertical={alert.vertical}
        horizontal={alert.horizontal}
        handleClose={alert.close}
        message={alert.message}
        title={alert.title}
        error={alert.error}
      />
    </Box>
  );
};

import { Box } from "@mui/material";
import { useContext } from "react";
import { ProductList } from "../../components/app/cartPage";
import { SnackbarMessage } from "../../components/commons/snackbars";
import { CartPageContext } from "./CartPage";
export const Cart = () => {
  const { user, alert } = useContext(CartPageContext);
  return (
    <>
      <h1>Tu Carrito {user.user?.name}</h1>
      <h2>Tienes disponibles: ${user.user?.money}</h2>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "white",
          padding: 5,
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductList />
      </Box>
      <SnackbarMessage
        open={alert.open}
        vertical={alert.vertical}
        horizontal={alert.horizontal}
        handleClose={alert.close}
        message={alert.message}
        title={alert.title}
        error={alert.error}
      />
    </>
  );
};

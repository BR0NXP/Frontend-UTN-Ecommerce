import { Box, Button, Typography } from "@mui/material";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../hooks";
import { SingleProductPageContext } from "../../../pages";

export const DataProduct = () => {
  const TOKEN = useAppSelector((state) => state.users.session.data.token);
  const navigate = useNavigate();

  const {
    product: {
      product: { data: productData },
    },
    addProduct,
  } = useContext(SingleProductPageContext);

  return (
    <>
      <Typography sx={{ fontSize: "48px" }}>{productData?.name}</Typography>
      <Typography sx={{ fontSize: "40px" }}>${productData?.price}</Typography>
      <Typography sx={{ fontSize: "28px" }}>
        {productData?.Categories.map(
          (category, index) =>
            category.name +
            (productData.Categories.length - 1 !== index ? ", " : "")
        )}
      </Typography>

      <Box marginTop={"5rem"}>
        <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
          Informacion del negocio
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Nombre: {productData?.Shop.name}
        </Typography>
        <Typography sx={{ fontSize: "28px" }}>
          Direccion: {productData?.Shop.address}
        </Typography>
      </Box>

      {TOKEN ? (
        <Button
          variant="contained"
          sx={{ marginTop: "5rem", padding: "2rem", fontSize: "26px" }}
          onClick={() => addProduct()}
        >
          Agregar al carrito
        </Button>
      ) : (
        <Button
          variant="contained"
          sx={{ marginTop: "5rem", padding: "2rem", fontSize: "26px" }}
          onClick={() => navigate(`/login`)}
        >
          Inicia sesion para comprar!
        </Button>
      )}
    </>
  );
};

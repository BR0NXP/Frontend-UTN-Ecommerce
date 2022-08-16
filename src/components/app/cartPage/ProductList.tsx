import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useContext } from "react";
import { CartPageContext } from "../../../pages";
import { TableItem } from "./TableItem";

export const ProductList = () => {
  const { cart, handlePayCart } = useContext(CartPageContext);
  if (cart.cart.isEmpty) {
    return <h1>Carrito vacio!</h1>;
  }
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Nombre del negocio</TableCell>
              <TableCell>#</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.cart.data?.ProductsTypes.map((product) => (
              <TableItem
                key={product.id}
                name={product.name}
                price={product.price}
                shopName={product.Shop.name}
                id={product.id}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: "flex", justifyContent: "flex-end", margin: "1rem" }}>
        <Button
          variant="contained"
          sx={{
            padding: "1rem",
            fontSize: "24px",
          }}
          onClick={() => handlePayCart()}
        >
          Pagar
        </Button>
      </Box>
    </>
  );
};

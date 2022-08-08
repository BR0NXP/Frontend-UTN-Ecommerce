import { Button, TableCell, TableRow } from "@mui/material";
import React, { useContext } from "react";
import { CartPageContext } from "../../../pages";

interface TableItemsProps {
  name: string;
  price: number;
  shopName: string;
  id: number;
}

export const TableItem = ({ id, name, price, shopName }: TableItemsProps) => {
  const { handleDeleteItem } = useContext(CartPageContext);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {name}
      </TableCell>
      <TableCell>${price}</TableCell>
      <TableCell>{shopName}</TableCell>
      <TableCell>
        <Button
          onClick={() => handleDeleteItem(id)}
          sx={{ backgroundColor: "red" }}
          variant="contained"
        >
          Eliminar
        </Button>
      </TableCell>
    </TableRow>
  );
};

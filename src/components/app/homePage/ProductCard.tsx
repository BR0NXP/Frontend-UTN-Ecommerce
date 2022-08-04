import { CardGroup } from "react-bootstrap";
import { Key, useContext } from "react";
import { HomePageContext } from "../../../pages";
import { ProductCard } from "../../commons/cards";

interface ProductCardRowProps {
  title: string;
}

export default function ProductCardRow({ title }: ProductCardRowProps) {
  const { electronic, muebles } = useContext(HomePageContext);

  return (
    <>
      <h3>{title}</h3>
      <div className="container">
        <CardGroup>
          {electronic.electronic.data.map((product: { id: Key | null | undefined; name: string; }) => (
            <ProductCard key={product.id} title={product.name} />
          ))},  
          {muebles.muebles.data.map((product: { id: Key | null | undefined; name: string; }) => (
              <ProductCard key={product.id} title={product.name} />  
          ))}
        </CardGroup>
      </div>
    </>
  );
}

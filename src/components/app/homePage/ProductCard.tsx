import { CardGroup } from "react-bootstrap";
import { useContext } from "react";
import { HomePageContext } from "../../../pages";
import { ProductCard } from "../../commons/cards";

interface ProductCardRowProps {
  title: string;
}

export default function ProductCardRow({ title }: ProductCardRowProps) {
  const { electronic } = useContext(HomePageContext);

  return (
    <>
      <h3>{title}</h3>
      <div className="container">
        <CardGroup>
          {electronic.electronic.data.map((product) => (
            <ProductCard key={product.id} title={product.name} />
          ))}
        </CardGroup>
      </div>
    </>
  );
}

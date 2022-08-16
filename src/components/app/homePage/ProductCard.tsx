import { CardGroup } from "react-bootstrap";
import { ProductCard } from "../../commons/cards";

interface ProductCardRowProps {
  title: string;
  objects: any;
}

export default function ProductCardRow({
  title,
  objects,
}: ProductCardRowProps) {
  return (
    <>
      <h3>{title}</h3>
      <div className="container">
        <CardGroup >
          {objects.data.map((product: any) => (
            <ProductCard
              key={product.id}
              title={product.name}
              code={product.code}
            />
          ))}
        </CardGroup>
      </div>
    </>
  );
}

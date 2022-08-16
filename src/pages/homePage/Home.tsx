import { useContext } from "react";
import ProductCardRow from "../../components/app/homePage/ProductCard";
import { ProductsContainer } from "../../components/app/productsPage";
import { HomePageContext } from "./HomePage";

export const Home = () => {
  const { electronic, muebles } = useContext(HomePageContext);

  return (
    <>
      {!electronic.isLoading && (
        <ProductCardRow title={"Electronica"} objects={electronic.electronic} />
      )}
      {!muebles.isLoading && (
        <ProductCardRow title={"Muebles"} objects={muebles.muebles} />
      )}
    </>
  );
};

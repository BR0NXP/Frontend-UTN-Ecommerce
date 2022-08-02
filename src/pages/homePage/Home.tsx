import { useContext } from "react";
import ProductCardRow from "../../components/app/homePage/ProductCard";
import { HomePageContext } from "./HomePage";

export const Home = () => {
  const {
    electronic: { isLoading: electronicLoading },
  } = useContext(HomePageContext);

  return <>{!electronicLoading && <ProductCardRow title={"Electronica"} />}</>;
};

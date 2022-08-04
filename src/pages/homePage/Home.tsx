import { useContext } from "react";
import ProductCardRow from "../../components/app/homePage/ProductCard";
import { HomePageContext } from "./HomePage";

export const Home = () => {
  const {
    electronic: { isLoading: electronisLoading },
  } = useContext(HomePageContext);
  const { 
    muebles: { isLoading: mueblesisLoading },
  } = useContext( HomePageContext );  


  return <>
  {!electronisLoading && <ProductCardRow title={"Electronica"} />}
  {!mueblesisLoading && <ProductCardRow title={"Muebles"} />}
  </>;
  
  
};

import { useContext } from "react";
import ProductCardRow from "../../components/app/homePage/ProductCard";
import { ProductsContainer } from "../../components/app/productsPage";
import { HomePageContext } from "./HomePage";

export const Home = () => {
  const {
    electronic: { isLoading: electronisLoading },
  } = useContext(HomePageContext);
  const { 
    muebles: { isLoading: mueblesisLoading },
  } = useContext( HomePageContext );  
 
  return (
  <>
   <ProductCardRow title={"Electronica"} />
   <ProductCardRow title={"Muebles"} />
   
  </>
  
  
  
  
  )
  
  
};

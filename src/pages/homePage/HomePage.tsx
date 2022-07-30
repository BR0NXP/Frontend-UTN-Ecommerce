import { Route, Routes } from 'react-router-dom'
import { Login } from "@mui/icons-material"
import CartPage from "../cartPage/CartPage"
import ProductCard from "../../components/app/homePage/ProductCard"


export const HomePage = () => {
  return (
    <>
      < ProductCard />
      < ProductCard />
     {/*  <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<CartPage/>} />

      </Routes> */}
      
    </>
  )
}

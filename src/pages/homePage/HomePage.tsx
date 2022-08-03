import { Route, Routes } from 'react-router-dom'
import { Login } from "@mui/icons-material"
import CartPage from "../cartPage/CartPage"
import ProductCard from "../../components/app/homePage/ProductCard"
import { ProductPage } from '../productsPage/ProductsPage'


export const HomePage = () => {
  return (
    <>
      < ProductPage />
     {/*  <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<CartPage/>} />

      </Routes> */}
      
    </>
  )
}

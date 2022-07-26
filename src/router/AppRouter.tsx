import { Routes, Route } from "react-router-dom";
import {  HomePage } from "../pages";
import CartPage from "../pages/cartPage/CartPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { RegisterPage } from "../pages/registerPage/RegisterPage";


const AppRouter = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<HomePage />}/> 
      </Routes>
  );
}

export default AppRouter;
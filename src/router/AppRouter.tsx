import { Routes, Route } from "react-router-dom";
import NavBar from "../components/app/homePage/NavBar";
import { HomePage, ProductPage, SingleProductPage } from "../pages";
import CartPage from "../pages/cartPage/CartPage";
import { LoginPage } from "../pages/loginPage/LoginPage";
import { RegisterPage } from "../pages/registerPage/RegisterPage";

const AppRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/product/:code" element={<SingleProductPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </>
  );
};

export default AppRouter;

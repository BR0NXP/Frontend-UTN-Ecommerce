import { Routes, Route } from "react-router-dom";
import { AboutPage, HomePage } from "../pages";


const Router = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/search/:product" element={<AboutPage />} />
      </Routes>
  );
}

export default Router;
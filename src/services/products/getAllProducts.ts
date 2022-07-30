import axios from "axios";
import { URL_API } from "../../constants/services";
import { AllProducts } from "../../models/products/allProducts";

interface getAllProductsProps {
  controller: AbortController;
}

export const getAllProducts = async ({ controller }: getAllProductsProps) => {
  try {
    const settings = {
      signal: controller.signal,
    };

    const { status, data } = await axios.get<AllProducts>(
      URL_API + "/products/allProducts",
      settings
    );
    return { status, data:data.rows };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

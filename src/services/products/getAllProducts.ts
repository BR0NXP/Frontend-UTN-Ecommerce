import axios from "axios";
import { URL_API } from "../../constants/services";
import { AllProducts } from "../../models/products/allProducts";

interface getAllProductsProps {
  controller: AbortController;
  product: string | undefined;
}

export const getAllProducts = async ({
  controller,
  product,
}: getAllProductsProps) => {
  try {
    const settings = {
      params: { productName: product },
      signal: controller.signal,
    };

    const { status, data } = await axios.get<AllProducts>(
      URL_API + "/products/allProducts",
      settings
    );
    return { status, data: data.rows };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

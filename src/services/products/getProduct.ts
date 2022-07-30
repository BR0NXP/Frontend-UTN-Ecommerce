import axios from "axios";
import { URL_API } from "../../constants/services";
import { SingleProduct } from "../../models/products/singleProduct";

interface getAllProductsProps {
  controller: AbortController;
  code: string;
}

export const getProduct = async ({ controller, code }: getAllProductsProps) => {
  try {
    const settings = {
      signal: controller.signal,
      params: {
        code,
      },
    };

    const { status, data } = await axios.get<SingleProduct>(
      URL_API + "/products/product",
      settings
    );
    return { status, data: data };
  } catch (err) {
    return { status: 500 };
  }
};

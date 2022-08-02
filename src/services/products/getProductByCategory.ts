import axios from "axios";
import { URL_API } from "../../constants/services";
import { ProductsByCategoryResponse } from "../../models/products/productsByCategory";

export const getProductByCategory = async (
  controller: AbortController,
  idCategory: number
) => {
  try {
    const settings = {
      params: {
        categoryId: idCategory,
      },
      signal: controller.signal,
    };
    const productsResponse = await axios.get<ProductsByCategoryResponse>(
      URL_API + "/products/byCategory",
      settings
    );
    return { status: 200, data: productsResponse.data.rows };
  } catch (err) {
    return { status: 500, data: [] };
  }
};

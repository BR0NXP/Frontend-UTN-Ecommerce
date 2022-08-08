import axios from "axios";
import { URL_API } from "../../constants/services";

export const removeItemCart = async (token: string, idProduct: number) => {
  try {
    const settings = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: {
        productTypeId: idProduct,
      },
    };

    const { status } = await axios.delete(URL_API + "/cart/remove", settings);
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

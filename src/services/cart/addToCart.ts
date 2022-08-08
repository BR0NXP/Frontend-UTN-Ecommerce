import axios from "axios";
import { URL_API } from "../../constants/services";

export const addToCart = async (token: string, idProduct: number) => {
  try {
    const settings = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      body: {
        productTypeId: idProduct,
      },
    };

    const { status } = await axios.post(
      URL_API + "/cart/addNew",
      settings.body,
      { headers: settings.headers }
    );
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

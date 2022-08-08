import axios from "axios";
import { URL_API } from "../../constants/services";

export const payCart = async (token: string) => {
  try {
    const settings = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };

    const { status } = await axios.post(URL_API + "/cart/pay", {}, settings);
    return { status: status };
  } catch (err) {
    return { status: 500 };
  }
};

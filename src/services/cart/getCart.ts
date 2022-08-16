import axios from "axios";
import { URL_API } from "../../constants/services";
import { CartResponse } from "../../models/cart/cart";

interface getCartProps {
  controller: AbortController;
  token: string;
}

export const getCart = async ({ controller, token }: getCartProps) => {
  try {
    const settings = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      signal: controller.signal,
    };

    const { status, data: cartData } = await axios.get<CartResponse>(
      URL_API + "/cart/cart",
      settings
    );
    return { status: 200, data: cartData };
  } catch (err) {
    return { status: 500 };
  }
};

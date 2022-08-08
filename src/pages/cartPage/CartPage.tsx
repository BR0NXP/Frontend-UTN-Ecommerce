import { createContext, useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../../hooks";
import { Cart as CartResponse } from "../../models/cart/cart";
import { UserData } from "../../models/session/getUser";
import { payCart, removeItemCart } from "../../services/cart";
import { getCart } from "../../services/cart/getCart";
import { getUserInfo } from "../../services/session";
import { Cart } from "./Cart";
type CartPageType = {
  cart: CartProps;
  user: UserProps;
  alert: StateAlert;
  handleDeleteItem: (idProduct: number) => void;
  handlePayCart: () => void;
};

interface CartProps {
  isLoading: boolean;
  cart: {
    error: boolean;
    isEmpty?: boolean;
    data?: CartResponse;
  };
}
interface UserProps {
  isLoading: boolean;
  isError: boolean;
  user?: UserData;
}
interface StateAlert {
  open: boolean;
  vertical: "bottom" | "top";
  horizontal: "right" | "left" | "center";
  message: string;
  title: string;
  error: boolean;
  close: () => void;
}
export const CartPageContext = createContext({} as CartPageType);

export const CartPage = () => {
  const TOKEN = useAppSelector((state) => state.users.session.data.token);
  const [cart, setCart] = useState<CartProps>({
    isLoading: true,
    cart: { error: false, isEmpty: true },
  });
  const [user, setUser] = useState<UserProps>({
    isLoading: true,
    isError: false,
  });
  const [alert, setAlert] = useState<StateAlert>({
    open: false,
    vertical: "bottom",
    horizontal: "center",
    message: "",
    title: "",
    error: false,
    close: () => handleCloseAlert(),
  });
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };
  const handlePayCart = async () => {
    const { status } = await payCart(TOKEN);
    if (status !== 200) {
      return setAlert({
        ...alert,
        open: true,
        message: "No se ha podido pagar!",
        title: "Ooops... Error!",
        error: true,
      });
    }
    window.location.reload();
  };
  const handleDeleteItem = async (idProduct: number) => {
    if (cart.cart.data) {
      const { status } = await removeItemCart(TOKEN, idProduct);
      if (status === 200) {
        if (cart.cart.data.ProductsTypes.length === 1) {
          return setCart({
            ...cart,
            cart: {
              ...cart.cart,
              isEmpty: true,
              data: {
                ...cart.cart.data,
                ProductsTypes: [...cart.cart.data.ProductsTypes].filter(
                  (product) => product.id !== idProduct
                ),
              },
            },
          });
        }
        return setCart({
          ...cart,
          cart: {
            ...cart.cart,
            data: {
              ...cart.cart.data,
              ProductsTypes: [...cart.cart.data.ProductsTypes].filter(
                (product) => product.id !== idProduct
              ),
            },
          },
        });
      }
    }
  };
  const cartData = useCallback(
    async (controller: AbortController) => {
      const cartResponse = await getCart({ controller, token: TOKEN });

      if (cartResponse.status !== 200) {
        return { error: true };
      }
      return {
        error: false,
        isEmpty: cartResponse.data?.isEmpty,
        data: cartResponse.data?.cart,
      };
    },
    [TOKEN]
  );
  const userData = useCallback(
    async (controller: AbortController) => {
      const userResponse = await getUserInfo(TOKEN, controller);

      if (userResponse.status !== 200) {
        return { isError: true };
      }
      return {
        isError: false,
        user: userResponse.data?.userData,
      };
    },
    [TOKEN]
  );

  const dataController = useCallback(
    async (controller: AbortController) => {
      const cartCleaned = await cartData(controller);
      const userCleaned = await userData(controller);
      setCart({
        isLoading: false,
        cart: cartCleaned,
      });
      setUser({
        isLoading: false,
        isError: userCleaned.isError,
        user: userCleaned?.user,
      });
    },
    [cartData, userData]
  );

  useEffect(() => {
    const controller = new AbortController();
    if (cart.isLoading && TOKEN) {
      dataController(controller);
    }

    return () => {
      controller.abort();
    };
  }, [TOKEN, cart.isLoading, dataController]);
  if (!TOKEN) {
    return (
      <>
        <h1>OOPS... NO session active</h1>
      </>
    );
  }
  return (
    <CartPageContext.Provider
      value={{
        cart,
        user,
        alert,
        handleDeleteItem,
        handlePayCart,
      }}
    >
      <Cart />
    </CartPageContext.Provider>
  );
};

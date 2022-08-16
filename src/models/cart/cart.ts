export interface CartResponse {
  isEmpty: boolean;
  cart?: Cart;
}

export interface Cart {
  id: number;
  code: string;
  createdAt: string;
  updatedAt: string;
  idUser: number;
  UserId: null;
  ProductsTypes: ProductsType[];
}

export interface ProductsType {
  id: number;
  code: string;
  name: string;
  price: number;
  amount: number;
  createdAt: string;
  updatedAt: string;
  idShop: number;
  CartsProductsTypes: CartsProductsTypes;
  Shop: Shop;
}

export interface CartsProductsTypes {
  id: number;
  idProductType: number;
  idCart: number;
}
export interface Shop {
  id: number;
  code: string;
  name: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

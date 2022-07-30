export interface SingleProduct {
  id: number;
  code: string;
  name: string;
  price: number;
  amount: number;
  createdAt: string;
  updatedAt: string;
  idShop: number;
  Shop: Shop;
  Categories: Shop[];
}

export interface Shop {
  id: number;
  code: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  ProductsTypesCategories?: ProductsTypesCategories;
  address?: string;
}

export interface ProductsTypesCategories {
  id: number;
  idCategory: number;
  idProductType: number;
}

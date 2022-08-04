export interface ProductsByCategoryResponse {
    count: number;
    rows:  ProdByCat[];
}

export interface ProdByCat {
    id:         number;
    code:       string;
    name:       string;
    price:      number;
    amount:     number;
    createdAt:  string;
    updatedAt:  string;
    idShop:     number;
    Categories: Category[];
}

export interface Category {
    id:                      number;
    code:                    string;
    name:                    string;
    createdAt:               string;
    updatedAt:               string;
    ProductsTypesCategories: ProductsTypesCategories;
}

export interface ProductsTypesCategories {
    id:            number;
    idCategory:    number;
    idProductType: number;
}

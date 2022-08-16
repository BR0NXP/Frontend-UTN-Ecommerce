export interface UserDataResponse {
    userData: UserData;
}

export interface UserData {
    name:     string;
    surname:  string;
    money:    number;
    userName: string;
    cart:     Cart;
}

export interface Cart {
    id:        number;
    code:      string;
    createdAt: string;
    updatedAt: string;
    idUser:    number;
    UserId:    null;
}

export type Login = {
  userName: string;
  password: string;
};

export interface LoginResponse {
  error: boolean;
  data: Data;
}

export interface Data {
  token: string;
  user: User;
}

export interface User {
  name: string;
  userName: string;
}

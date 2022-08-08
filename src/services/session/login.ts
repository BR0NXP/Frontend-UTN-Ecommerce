import axios from "axios";
import { URL_API } from "../../constants/services";
import { Login, LoginResponse } from "../../models/session/login";

export const login = async (data: Login) => {
  try {
    const signUpConfig = {
      body: { ...data },
      headers: {},
    };
    const signUpResponse = await axios.post<LoginResponse>(
      URL_API + "/session/login",
      signUpConfig.body
    );
    return { status: signUpResponse.status, data: signUpResponse.data };
  } catch (err) {
    return { status: 405 };
  }
};

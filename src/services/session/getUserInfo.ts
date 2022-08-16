import axios from "axios";
import { URL_API } from "../../constants/services";
import { UserDataResponse } from "../../models/session/getUser";

export const getUserInfo = async (token: string, controller: AbortController) => {
  try {
    const settings = {
      headers: {
        authorization: `Bearer ${token}`,
      },
      signal: controller.signal,
    };
    const signUpResponse = await axios.get<UserDataResponse>(
      URL_API + "/session/userInfo",
      settings
    );
    return { status: signUpResponse.status, data: signUpResponse.data };
  } catch (err) {
    return { status: 405 };
  }
};

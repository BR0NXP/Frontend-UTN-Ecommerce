import axios from "axios";
import { URL_API } from "../../constants/services";
import { UserData } from "../../models/session/signUp";

export const singUp = async (data: UserData) => {
  try {
    const signUpConfig = {
      body: { ...data },
      headers: {},
    };
    const signUpResponse = await axios.post(
      URL_API + "/session/signIn",
      signUpConfig.body
    );
    return { status: signUpResponse.status };
  } catch (err) {
    return { status: 405 };
  }
};

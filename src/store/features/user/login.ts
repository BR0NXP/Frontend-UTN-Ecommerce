import { actionLoginUser, actionErrorLogin } from "./index";
import { Dispatch } from "redux";
import { login as userLogin } from "./../../../services/session";
export const login =
  (user: { userName: string; password: string }) =>
  async (dispatch: Dispatch) => {
    const loginResponse = await userLogin(user);
    if (loginResponse.status === 200 && loginResponse.data) {
      localStorage.setItem(
        "negocioSession",
        JSON.stringify(loginResponse.data.data)
      );
      return dispatch(actionLoginUser(loginResponse.data));
    }
    return dispatch(actionErrorLogin());
  };

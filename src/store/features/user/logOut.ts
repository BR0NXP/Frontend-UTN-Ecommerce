import { actionCleanLogin } from "./index";
import { Dispatch } from "redux";
export const logOut = () => (dispatch: Dispatch) => {
  localStorage.removeItem("negocioSession");
  return dispatch(actionCleanLogin());
};

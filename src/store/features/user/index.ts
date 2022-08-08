import { createSlice } from "@reduxjs/toolkit";
import { LoginResponse } from "../../../models/session/login";
const negocioSession =
  localStorage.getItem("negocioSession") !== null
    ? localStorage.getItem("negocioSession")
    : null;
const initialState: { session: LoginResponse } = {
  session: {
    error: false,
    data: negocioSession
      ? JSON.parse(negocioSession)
      : {
          token: "",
          user: {
            name: "",
            userName: "",
          },
        },
  },
};
export const userFeature = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    actionLoginUser: (state, action) => {
      state.session = action.payload;
    },
    actionErrorLogin: (state) => {
      state.session = { ...initialState.session, error: true };
    },
    actionCleanLogin: (state) => {
      state.session = { ...initialState.session };
    },
  },
});
export const { actionLoginUser, actionErrorLogin, actionCleanLogin } =
  userFeature.actions;

export default userFeature.reducer;

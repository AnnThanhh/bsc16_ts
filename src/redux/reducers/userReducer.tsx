import { createSlice } from "@reduxjs/toolkit";
import { getDataJSON, setCookie } from "../../Utils/Method";
import { ACCESS_TOKEN, httpClient, USER_LOGIN } from "../../Utils/utils";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UserLogin } from "../../assets/models/UserModel";
import type { DispatchType } from "../store";
import { setDataJSON, setAccessToken } from "../../Utils/Method";
import { routelink } from "../../App";
export interface UserLogged {
  email: string;
  accessToken: string;
}

interface UserReducerType {
  userLogin: UserLogged | null;
}

const initialState: UserReducerType = {
  userLogin: getDataJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction(
      state: UserReducerType,
      action: PayloadAction<UserLogged>
    ) {
      state.userLogin = action.payload;
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

export const userLoginAPI = (userLogin: UserLogin) => {
  return async (dispatch: DispatchType) => {
    const res = await httpClient.post("/api/Users/signin");

    const action: PayloadAction<UserLogged> = setUserLoginAction(
      res.data.content
    );
    dispatch(action);
    setDataJSON(USER_LOGIN, res.data.content);
    setCookie(ACCESS_TOKEN, res.data.content.accessToken, 7);
    setAccessToken(res.data.content.accessToken);
    routelink.push("/profile");
  };
};

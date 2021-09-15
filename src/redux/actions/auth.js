import { authAPI } from "../../api/api";
import { SET_USER_DATA } from "../constants";

const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});

export const getIsAuth = () => async (dispatch) => {
  let response = await authAPI.isAuth();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);
  if (response.resultCode === 0) {
    dispatch(getIsAuth());
  }
};

export const logout = () => async (dispatch) => {
  let response = authAPI.logout();
  if (response.resultCode === 0) {
    dispatch(getIsAuth(null, null, null, false));
  }
};

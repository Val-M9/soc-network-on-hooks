import { SET_USER_DATA } from "../constants";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, action };
    default:
      return state;
  }
}

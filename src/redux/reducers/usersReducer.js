import { SET_USERS, SET_IS_FETCHING, SET_TOTAL_COUNT, SET_CURRENT_PAGE } from "../constants";

let initialState = {
  users: [],
  currentPage: 1,
  quantityOnPage: 10,
  totalCount: 0,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, users: action.users, isFetching: true };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case SET_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.page };
    default:
      return state;
  }
};

export default usersReducer;

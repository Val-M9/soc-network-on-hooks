import {
  SET_USERS,
  SET_IS_FETCHING,
  SET_TOTAL_COUNT,
  SET_CURRENT_PAGE,
  TOGGLE_FOLLOWING,
} from "../constants";

let initialState = {
  users: [],
  currentPage: 1,
  quantityOnPage: 10,
  totalCount: 0,
  isFetching: false,
  followingInProgress: [],
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
    case TOGGLE_FOLLOWING:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: !u.followed };
          }
          return u;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;

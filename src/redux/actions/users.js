import { SET_USERS, SET_IS_FETCHING, SET_CURRENT_PAGE, SET_TOTAL_COUNT } from "../constants";

import { usersAPI } from "../../api/api";

const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

const toggleIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  isFetching,
});

const setCurrentPage = (pageNumber) => ({
  type: SET_CURRENT_PAGE,
  page: pageNumber,
});

const setUsersTotalCount = (totalCount) => ({
  type: SET_TOTAL_COUNT,
  totalCount,
});

export const fetchUsers = (page, quantityOnPage) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, quantityOnPage);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCount(response.totalCount));
};

import {
  SET_USERS,
  SET_IS_FETCHING,
  SET_CURRENT_PAGE,
  SET_TOTAL_COUNT,
  TOGGLE_FOLLOWING,
} from "../constants";

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

const followUnfollow = (userId) => ({
  type: TOGGLE_FOLLOWING,
  userId,
});

export const fetchUsers = (page, quantityOnPage) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  dispatch(setCurrentPage(page));
  let response = await usersAPI.getUsers(page, quantityOnPage);
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.items));
  dispatch(setUsersTotalCount(response.totalCount));
};

export const toggleFollowing = (userId, isFollowed) => async (dispatch) => {
  if (isFollowed) {
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUnfollow(userId));
    }
  } else {
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode === 0) {
      dispatch(followUnfollow(userId));
    }
  }
};

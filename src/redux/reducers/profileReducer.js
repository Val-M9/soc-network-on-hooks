import { profileAPI } from "../../api/api";
import { SET_USER_PROFILE } from "../constants";

let initialState = {
  profile: null,
  status: "",
  posts: [
    { id: 1, post: "Hi, need to talk", likeCount: "10" },
    { id: 2, post: "It's my first post", likeCount: "4" },
  ],
};

export default function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
}

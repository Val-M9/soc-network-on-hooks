import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunk from "redux-thunk";

import profileReducer from "../reducers/profileReducer";
import usersReducer from "../reducers/usersReducer";
import authReducer from "../reducers/authReducer";

const rootReducer = combineReducers({
  loginPage: authReducer,
  profilePage: profileReducer,
  usersPage: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;

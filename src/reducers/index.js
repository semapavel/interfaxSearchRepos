import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import usersReducer from "./usersReducer";
import reposReducer from "./reposReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import commitsReducer from "./commitsReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  repos: reposReducer,
  commits: commitsReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
import { combineReducers } from "redux";
import { userReducer } from "./user";
import coursReducer from "./Cours";
import userlistReducer from "./listuser";
export const rootReducer = combineReducers({
  userReducer,
  coursReducer,
  userlistReducer,
});

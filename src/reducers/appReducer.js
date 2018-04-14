import { combineReducers } from "redux";
import authorizationReducer from "./authorizationReducer";
import guestLinksReducer from "./guestLinksReducer";

const appReducer = combineReducers({
  user: authorizationReducer,
  guest: guestLinksReducer,
});

export default appReducer;

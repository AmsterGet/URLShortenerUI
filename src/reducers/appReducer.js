import { combineReducers } from "redux";
import authorizationReducer from "./authorizationReducer";
import guestLinksReducer from "./guestLinksReducer";
import userLinksReducer from "./userLinksReducer";

const appReducer = combineReducers({
  user: authorizationReducer,
  userLinks: userLinksReducer,
  guest: guestLinksReducer,
});

export default appReducer;

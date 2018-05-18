import { combineReducers } from "redux";
import authorizationReducer from "./authorizationReducer";
import guestLinksReducer from "./guestLinksReducer";
import userLinksReducer from "./userLinksReducer";
import usersListReducer from "./usersListReducer";

const appReducer = combineReducers({
  user: authorizationReducer,
  userLinks: userLinksReducer,
  guest: guestLinksReducer,
  usersList: usersListReducer,
});

export default appReducer;

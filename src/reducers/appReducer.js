import { combineReducers } from "redux";
import { signInReducer, signUpReducer, signOutReducer } from "./authorizationReducers";
import { guestLinksReducer } from "./linkReducers";

const appReducer = combineReducers({
  signInUser: signInReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
  guestLinks: guestLinksReducer,
});

export default appReducer;

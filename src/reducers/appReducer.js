import { combineReducers } from "redux";
import { signInReducer, signUpReducer, signOutReducer } from "./authorizationReducers";

const appReducer = combineReducers({
  signInUser: signInReducer,
  signUp: signUpReducer,
  signOut: signOutReducer,
});

export default appReducer;

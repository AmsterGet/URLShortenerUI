import createAsyncActionTypes from "./createAsyncActionTypes";

export const guestLinkInfoRequests = createAsyncActionTypes("LINK_INFO");

export const guestLinksByTagNameRequests = createAsyncActionTypes("LINKS_BY_TAG_NAME");

export const signInRequests = createAsyncActionTypes("SIGN_IN");

export const signOutRequests = createAsyncActionTypes("SIGN_OUT");

export const signUpRequests = createAsyncActionTypes("SIGN_UP");

export const userLinksActions = {
  ADD_LINK: "ADD_LINK",
  EDIT_LINK: "EDIT_LINK",
  REMOVE_LINK: "REMOVE_LINK",
};

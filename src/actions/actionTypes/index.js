import createAsyncActionTypes from "./createAsyncActionTypes";

export const guestLinkInfoRequests = createAsyncActionTypes("LINK_INFO");

export const guestLinksByTagNameRequests = createAsyncActionTypes("LINKS_BY_TAG_NAME");

export const signInRequests = createAsyncActionTypes("SIGN_IN");

export const signUpRequests = createAsyncActionTypes("SIGN_UP");

export const signOutRequests = createAsyncActionTypes("SIGN_OUT");

export const addLinkRequests = createAsyncActionTypes("ADD_LINK");

export const editLinkRequests = createAsyncActionTypes("EDIT_LINK");

export const removeLinkRequests = createAsyncActionTypes("REMOVE_LINK");

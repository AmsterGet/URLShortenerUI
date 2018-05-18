import createAsyncActionTypes from "./createAsyncActionTypes";

export const guestLinkInfoRequests = createAsyncActionTypes("LINK_INFO");

export const guestLinksRequests = createAsyncActionTypes("GUEST_LINKS");

export const signInRequests = createAsyncActionTypes("SIGN_IN");

export const signUpRequests = createAsyncActionTypes("SIGN_UP");

export const signOutRequests = createAsyncActionTypes("SIGN_OUT");

export const getLinksRequests = createAsyncActionTypes("GET_LINKS");

export const addLinksRequests = createAsyncActionTypes("ADD_LINKS");

export const editLinkRequests = createAsyncActionTypes("EDIT_LINK");

export const removeLinkRequests = createAsyncActionTypes("REMOVE_LINK");

export const getUsersRequests = createAsyncActionTypes("GET_USERS");

export const addUserRequests = createAsyncActionTypes("ADD_USER");

export const removeUserRequests = createAsyncActionTypes("REMOVE_USER");

export const CLEAR_USER_LINKS = "CLEAR_USER_LINKS";

export const CLEAR_GUEST_LINKS = "CLEAR_GUEST_LINKS";

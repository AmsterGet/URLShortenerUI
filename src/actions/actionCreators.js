import { signInRequests, signUpRequests, guestLinkInfoRequests, guestLinksByTagNameRequests } from "./actionTypes";

export const signInSuccess = ({ login, mail, name, links }) => ({
  type: signInRequests.SIGN_IN_SUCCESS,
  payload: {
    user: {
      login,
      mail,
      name,
    },
    links,
  },
});
export const signInError = data => ({
  type: signInRequests.SIGN_IN_ERROR,
  payload: data,
});

export const signUpSuccess = ({ login, mail, name }) => ({
  type: signUpRequests.SIGN_UP_SUCCESS,
  payload: {
    login,
    mail,
    name,
  },
});
export const signUpError = data => ({
  type: signUpRequests.SIGN_UP_ERROR,
  payload: data,
});




export const guestLinkInfoSuccess = link => ({
  type: guestLinkInfoRequests.LINK_INFO_SUCCESS,
  payload: {
    link,
  },
});
export const guestLinkInfoError = data => ({
  type: guestLinkInfoRequests.LINK_INFO_ERROR,
  payload: data,
});

export const guestLinksByTagNameSuccess = links => ({
  type: guestLinksByTagNameRequests.LINKS_BY_TAG_NAME_SUCCESS,
  payload: {
    links,
  },
});
export const guestLinksByTagNameError = data => ({
  type: guestLinksByTagNameRequests.LINKS_BY_TAG_NAME_ERROR,
  payload: data,
});

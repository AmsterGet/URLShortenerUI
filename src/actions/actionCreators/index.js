import { signInRequests, signUpRequests, guestLinkInfoRequests, guestLinksByTagNameRequests } from "../actionTypes/index";

export const signInSuccess = ({ login, mail, name, links }) => ({
  type: signInRequests.SUCCESS,
  payload: {
    userData: {
      login,
      mail,
      name,
    },
    links,
  },
});
export const signInError = data => ({
  type: signInRequests.ERROR,
  payload: data,
});

export const signUpSuccess = ({ login, mail, name }) => ({
  type: signUpRequests.SUCCESS,
  payload: {
    login,
    mail,
    name,
  },
});
export const signUpError = data => ({
  type: signUpRequests.ERROR,
  payload: data,
});




export const guestLinkInfoSuccess = link => ({
  type: guestLinkInfoRequests.SUCCESS,
  payload: {
    link,
  },
});
export const guestLinkInfoError = data => ({
  type: guestLinkInfoRequests.ERROR,
  payload: data,
});

export const guestLinksByTagNameSuccess = links => ({
  type: guestLinksByTagNameRequests.SUCCESS,
  payload: {
    links,
  },
});
export const guestLinksByTagNameError = data => ({
  type: guestLinksByTagNameRequests.ERROR,
  payload: data,
});

import { signInRequests, signUpRequests } from "./actionTypes";

export const signInSuccess = ({ login, mail, name, links }) => ({
  type: signInRequests.SIGN_IN_SUCCESS,
  payload: {
    login,
    mail,
    name,
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

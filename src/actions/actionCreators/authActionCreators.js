import {
  signInRequests,
  signUpRequests,
} from "../actionTypes/index";

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
    userData: {
      login,
      mail,
      name,
    },
  },
});
export const signUpError = data => ({
  type: signUpRequests.ERROR,
  payload: data,
});

import {
  signInRequests,
  signUpRequests,
  signOutRequests,
} from "../actionTypes/index";

export const signInSuccess = ({ login, mail, name }) => ({
  type: signInRequests.SUCCESS,
  payload: {
    userData: {
      login,
      mail,
      name,
    },
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

export const signOutSuccess = data => ({
  type: signOutRequests.SUCCESS,
  payload: {
    userData: false,
    message: data.message,
  },
});
export const signOutError = data => ({
  type: signOutRequests.ERROR,
  payload: data,
});

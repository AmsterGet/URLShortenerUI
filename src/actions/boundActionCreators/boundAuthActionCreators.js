import axios from "axios";
import config from "../../config";
import {
  clearUserLinks,
  getLinksSuccess,
  getLinksError,
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
  signOutSuccess,
  signOutError,
} from "../actionCreators/";

export function boundSignIn(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: `${config.api}/signIn`,
      data: {
        login: userData.login,
        password: userData.password,
      },
    })
      .then((response) => {
        dispatch(signInSuccess(response.data));
        dispatch(getLinksSuccess(response.data.links));
      })
      .catch((error) => {
        dispatch(signInError(error.response.data));
        dispatch(getLinksError(error.response.data));
      });
  };
}

export function boundSignUp(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: `${config.api}/signUp`,
      data: {
        login: userData.login,
        password: userData.password,
        name: userData.name,
        mail: userData.mail,
      },
    })
      .then((response) => {
        dispatch(signUpSuccess({
          login: userData.login,
          name: userData.name,
          mail: userData.mail,
        }));
      })
      .catch((error) => {
        dispatch(signUpError(error.response.data));
      });
  };
}

export function boundSignOut(dispatch) {
  return (data) => {
    axios({
      method: "post",
      url: `${config.api}/signOut`,
      data,
    })
      .then((response) => {
        dispatch(signOutSuccess(response.data));
        dispatch(clearUserLinks(false));
      })
      .catch((error) => {
        dispatch(signOutError(error.response.data));
      });
  };
}

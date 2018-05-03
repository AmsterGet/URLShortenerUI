import axios from "axios";
import config from "../../config";
import {
  clearUserLinks,
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError,
  signOutSuccess,
  signOutError,
} from "../actionCreators/";
import utils from "../../utils";

export function boundSignIn(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: `${config.api}/signIn`,
      withCredentials: true,
      data: {
        login: userData.login,
        password: userData.password,
      },
    })
      .then((response) => {
        const resUserData = {
          login: response.data.login,
          name: response.data.name,
          mail: response.data.mail,
        };
        utils.localStorage.writeDataByKey("userData", resUserData);
        dispatch(signInSuccess(resUserData));
      })
      .catch((error) => {
        dispatch(signInError("Wrong Login and/or password"));
      });
  };
}

export function boundSignUp(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: `${config.api}/signUp`,
      withCredentials: true,
      data: {
        login: userData.login,
        password: userData.password,
        name: userData.name,
        mail: userData.mail,
      },
    })
      .then((response) => {
        const resUserData = {
          login: response.data.login,
          name: response.data.name,
          mail: response.data.mail,
        };
        utils.localStorage.writeDataByKey("userData", resUserData);
        dispatch(signUpSuccess(resUserData));
      })
      .catch((error) => {
        dispatch(signUpError(error.response.data));
      });
  };
}

export function boundOpenSavedSession(dispatch) {
  return () => {
    const userData = utils.localStorage.getDataByKey("userData");
    if (userData) {
      dispatch(signInSuccess(userData));
    }
  };
}

export function boundSignOut(dispatch) {
  return (data) => {
    axios({
      method: "post",
      url: `${config.api}/signOut`,
      data,
      withCredentials: true,
    })
      .then((response) => {
        utils.localStorage.removeDataByKey("userData");
        dispatch(signOutSuccess(response.data));
        dispatch(clearUserLinks(false));
      })
      .catch((error) => {
        dispatch(signOutError(error.response.data));
      });
  };
}

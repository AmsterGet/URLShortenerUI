import axios from "axios";
import {
  signInSuccess,
  signInError,
  signUpSuccess,
  signUpError
} from "../actionCreators/";

export function boundSignIn(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: "http://localhost:1212/signIn",
      data: {
        login: userData.login,
        password: userData.password,
      },
    })
      .then((response) => {
        console.log(response);
        dispatch(signInSuccess(response.data));
      })
      .catch((response) => {
        dispatch(signInError(response));
      });
  };
}

export function boundSignUp(dispatch) {
  return (userData) => {
    axios({
      method: "post",
      url: "http://localhost:1212/signUp",
      data: {
        login: userData.login,
        password: userData.password,
        name: userData.name,
        mail: userData.mail,
      },
    })
      .then((response) => {
        dispatch(signUpSuccess(response.data));
      })
      .catch((response) => {
        dispatch(signUpError(response));
      });
  };
}
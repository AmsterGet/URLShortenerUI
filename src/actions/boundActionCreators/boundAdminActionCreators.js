import axios from "axios";
import config from "../../config";
import {
  getUsersSuccess,
  getUsersError,
  removeUserSuccess,
  removeUserError,
  addUserSuccess,
  addUserError,
} from "../actionCreators/";

export function boundGetUsers(dispatch) {
  return () => {
    axios({
      method: "get",
      url: `${config.api}/user/admin/users`,
      withCredentials: true,
    })
      .then((response) => {
        console.log(response);
        dispatch(getUsersSuccess(response.data.users));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getUsersError(error));
      });
  };
}

export function boundAddUser(dispatch) {
  return (data) => {
    axios({
      method: "post",
      url: `${config.api}/user/admin/users`,
      withCredentials: true,
      data,
    })
      .then((response) => {
        dispatch(addUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addUserError("Such user already exists"));
      });
  };
}

export function boundRemoveUser(dispatch) {
  return (data) => {
    axios({
      method: "delete",
      url: `${config.api}/user/admin/users`,
      withCredentials: true,
      data,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(removeUserSuccess(data));
      })
      .catch((error) => {
        console.log(error);
        dispatch(removeUserError(error));
      });
  };
}

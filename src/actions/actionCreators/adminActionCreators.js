import {
  getUsersRequests,
  removeUserRequests,
} from "../actionTypes/index";


export const getUsersSuccess = users => ({
  type: getUsersRequests.SUCCESS,
  payload: {
    users,
  },
});
export const getUsersError = data => ({
  type: getUsersRequests.ERROR,
  payload: data,
});

export const removeUserSuccess = user => ({
  type: removeUserRequests.SUCCESS,
  payload: {
    user,
  },
});
export const removeUserError = data => ({
  type: removeUserRequests.ERROR,
  payload: data,
});

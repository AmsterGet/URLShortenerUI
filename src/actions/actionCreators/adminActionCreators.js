import {
  getUsersRequests,
  removeUserRequests,
  addUserRequests,
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

export const addUserSuccess = user => {
  user.linksQuantity = 0;
  return {
    type: addUserRequests.SUCCESS,
    payload: {
      user,
    },
  };
};
export const addUserError = data => ({
  type: addUserRequests.ERROR,
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

import { getUsersRequests, removeUserRequests, addUserRequests } from "../actions/actionTypes/";

const usersListInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  users: false,
};

export default function (state = usersListInitialState, action) {
  const { type, payload } = action;
  switch (type) {
  case getUsersRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      users: payload.users,
    };
  case getUsersRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case addUserRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      users: [...state.users, payload.user],
    };
  case addUserRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case removeUserRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      users: state.users.filter(user => user.login !== payload.user.login),
    };
  case removeUserRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };
  default:
    return state;
  }
}

import { signInRequests, signOutRequests, signUpRequests } from "../actions/actionTypes/";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  userData: false,
  links: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  console.log(payload);
  switch (type) {
  case signInRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signInRequests.SUCCESS:
    return {
      ...state,
      userData: payload.userData,
      links: payload.links,
      errorMessage: "",
      isLoading: false,
    };
  case signInRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case signUpRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signUpRequests.SUCCESS:
    return {
      ...state,
      userData: payload.userData,
      links: [],
      errorMessage: "",
      isLoading: false,
    };
  case signUpRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case signOutRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signOutRequests.SUCCESS:
    return {
      ...state,
      userData: false,
      links: false,
      errorMessage: "",
      isLoading: false,
    };
  case signOutRequests.ERROR:
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

import { signInRequests, signOutRequests, signUpRequests } from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  user: false,
  links: false,
};

export function signInReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case signInRequests.SIGN_IN_REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signInRequests.SIGN_IN_SUCCESS:
    return {
      ...state,
      user: payload.user,
      links: payload.links,
      isLoading: false,
    };
  case signInRequests.SIGN_IN_ERROR:
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

export function signUpReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case signUpRequests.SIGN_UP_REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signUpRequests.SIGN_UP_SUCCESS:
    return {
      ...state,
      user: payload,
      links: [],
      isLoading: false,
    };
  case signUpRequests.SIGN_UP_ERROR:
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

export function signOutReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
  case signOutRequests.SIGN_OUT_REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case signOutRequests.SIGN_OUT_SUCCESS:
    return {
      ...state,
      user: false,
      links: payload.links,
      isLoading: false,
    };
  case signOutRequests.SIGN_OUT_ERROR:
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

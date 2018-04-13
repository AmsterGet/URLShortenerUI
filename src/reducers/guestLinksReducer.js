import { guestLinkInfoRequests, guestLinksByTagNameRequests } from "../actions/actionTypes/";

const guestLinksInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  linkInfo: false,
  links: false,
};

export default function (state = guestLinksInitialState, action) { // guestLinksReducer
  const { type, payload } = action;
  switch (type) {
  case guestLinkInfoRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case guestLinkInfoRequests.SUCCESS:
    return {
      ...state,
      linkInfo: payload.link,
      errorMessage: "",
      isLoading: false,
    };
  case guestLinkInfoRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };
  case guestLinksByTagNameRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case guestLinksByTagNameRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      links: payload.links,
      isLoading: false,
    };
  case guestLinksByTagNameRequests.ERROR:
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

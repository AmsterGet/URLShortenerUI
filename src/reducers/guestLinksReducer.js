import { guestLinkInfoRequests,
  guestLinksRequests,
  CLEAR_GUEST_LINKS,
} from "../actions/actionTypes/";

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
  case CLEAR_GUEST_LINKS:
    return {
      ...state,
      links: payload.links,
    };
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
  case guestLinksRequests.REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case guestLinksRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      links: payload.links,
      isLoading: false,
    };
  case guestLinksRequests.ERROR:
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

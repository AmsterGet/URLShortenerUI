import { getLinksRequests, addLinkRequests, editLinkRequests, removeLinkRequests, CLEAR_USER_LINKS } from "../actions/actionTypes/";

const userLinksInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  links: false,
};

export default function (state = userLinksInitialState, action) {
  const { type, payload } = action;
  switch (type) {
  case CLEAR_USER_LINKS:
    return {
      ...state,
      links: payload.links,
    };
  case getLinksRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      links: payload.links,
    };
  case getLinksRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case addLinkRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      links: [...state.links, {
        originalUrl: payload.originalUrl,
        shortUrl: payload.shortUrl,
        postDate: payload.postDate,
        transitions: payload.transitions,
        description: payload.description,
        tags: payload.tags,
      }],
    };
  case addLinkRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case editLinkRequests.SUCCESS:
    return {
      ...state,
      links: [...state.links, { // DEBUG IT!!

      }],
    };
  case editLinkRequests.ERROR:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      links: payload.links,
    };
  default:
    return state;
  }
}

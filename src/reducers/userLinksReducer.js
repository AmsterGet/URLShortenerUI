import { getLinksRequests,
  addLinksRequests,
  editLinkRequests,
  removeLinkRequests,
  CLEAR_USER_LINKS,
} from "../actions/actionTypes/";

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

  case addLinksRequests.SUCCESS:
    return {
      ...state,
      errorMessage: "",
      isLoading: false,
      links: [...state.links, ...payload.links],
    };
  case addLinksRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case removeLinkRequests.SUCCESS:
    return {
      ...state,
      links: state.links.filter(link => link.shortUrl !== payload.link.shortUrl),
    };
  case removeLinkRequests.ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };

  case editLinkRequests.SUCCESS:
    return {
      ...state,
      links: [...state.links.filter(link => link.shortUrl !== payload.link.shortUrl),
        payload.link,
      ],
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

import { addLinkRequests, editLinkRequests } from "../actions/actionTypes/";

const userLinksInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  links: [],
};

export default function (state = userLinksInitialState, action) {
  const { type, payload } = action;
  switch (type) {
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
  default:
    return state;
  }
}

import { userLinksActions, guestLinkInfoRequests, guestLinksByTagNameRequests } from "../actions/actionTypes";

// export function userLinksReducer(state = [], action) {
//   const { type, payload } = action;
//   switch (type) {
//   case userLinksActions.ADD_LINK:
//     return [
//       ...state,
//       {
//         originalUrl: payload.originalUrl,
//         shortUrl: payload.shortUrl,
//         postDate: payload.postDate,
//         transitions: payload.transitions,
//         description: payload.description,
//         tags: payload.tags,
//       },
//     ];
//   case userLinksActions.EDIT_LINK:
//     return [
//
//     ];
//   case userLinksActions.REMOVE_LINK:
//     return [
//
//     ];
//   default:
//     return state;
//   }
// }

const guestLinksInitialState = {
  isLoading: false,
  isError: false,
  errorMessage: "",
  link: false,
  links: false,
};

export function guestLinksReducer(state = guestLinksInitialState, action) {
  const { type, payload } = action;
  switch (type) {
  case guestLinkInfoRequests.LINK_INFO_REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case guestLinkInfoRequests.LINK_INFO_SUCCESS:
    return {
      ...state,
      link: payload.link,
      isLoading: false,
    };
  case guestLinkInfoRequests.LINK_INFO_ERROR:
    return {
      ...state,
      errorMessage: payload,
      isLoading: false,
      isError: true,
    };
  case guestLinksByTagNameRequests.LINKS_BY_TAG_NAME_REQUEST:
    return {
      ...state,
      isLoading: true,
      isError: false,
    };
  case guestLinksByTagNameRequests.LINKS_BY_TAG_NAME_SUCCESS:
    return {
      ...state,
      links: payload.links,
      isLoading: false,
    };
  case guestLinksByTagNameRequests.LINKS_BY_TAG_NAME_ERROR:
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

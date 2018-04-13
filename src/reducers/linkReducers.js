import { userLinksActions, guestLinkInfoRequests, guestLinksByTagNameRequests } from "../actions/actionTypes/";

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
  linkInfo: false,
  links: false,
};

export function guestLinksReducer(state = guestLinksInitialState, action) {
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

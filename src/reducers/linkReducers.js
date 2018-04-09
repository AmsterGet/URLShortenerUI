import {
  ADD_LINK,
  EDIT_LINK,
  REMOVE_LINK,
} from "../actions/actionTypes";

export function userLinksReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
  case ADD_LINK:
    return [
      ...state,
      {
        originalUrl: payload.originalUrl,
        shortUrl: payload.shortUrl,
        postDate: payload.postDate,
        transitions: payload.transitions,
        description: payload.description,
        tags: payload.tags,
      },
    ];
  case EDIT_LINK:
    return [

    ];
  case REMOVE_LINK:
    return [

    ];
  default:
    return state;
  }
}

// export function guestLinksReducer(state, action) {
//   const { type, payload } = action;
//   switch (type) {
//     case ADD_LINK:
//       return {
//         ...state,
//     {
//
//     },
//   };
// case EDIT_LINK:
//     return {
//       ...state,
//       user: payload,
//       isLoading: false,
//     };
// case REMOVE_LINK:
//     return {
//       ...state,
//       errorMessage: payload,
//       isLoading: false,
//       isError: true,
//     };
// default:
//   return state;
// }
// }

import {
  getLinksRequests,
  addLinkRequests,
  editLinkRequests,
  removeLinkRequests,
  CLEAR_USER_LINKS,
} from "../actionTypes/index";

export const clearUserLinks = clearedValue => ({
  type: CLEAR_USER_LINKS,
  payload: {
    links: clearedValue,
  },
});
export const getLinksSuccess = links => ({
  type: getLinksRequests.SUCCESS,
  payload: {
    links,
  },
});
export const getLinksError = data => ({
  type: getLinksRequests.ERROR,
  payload: data,
});

export const addLinkSuccess = (link) => {
  console.log(link);
  return ({
    type: addLinkRequests.SUCCESS,
    payload: {
      ...link,
    },
  });
};
export const addLinkError = data => ({
  type: addLinkRequests.ERROR,
  payload: data,
});

export const editLinkSuccess = links => ({
  type: editLinkRequests.SUCCESS,
  payload: {
    links,
  },
});
export const editLinkError = data => ({
  type: editLinkRequests.ERROR,
  payload: data,
});

export const removeLinkSuccess = links => ({
  type: removeLinkRequests.SUCCESS,
  payload: {
    links,
  },
});
export const removeLinkError = data => ({
  type: removeLinkRequests.ERROR,
  payload: data,
});

import {
  addLinkRequests,
  editLinkRequests,
  removeLinkRequests,
} from "../actionTypes/index";

export const addLinkSuccess = link => ({
  type: addLinkRequests.SUCCESS,
  payload: {
    link,
  },
});
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

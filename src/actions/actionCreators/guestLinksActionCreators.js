import {
  guestLinkInfoRequests,
  guestLinksByTagNameRequests,
} from "../actionTypes/index";

export const guestLinkInfoSuccess = link => ({
  type: guestLinkInfoRequests.SUCCESS,
  payload: {
    link,
  },
});
export const guestLinkInfoError = data => ({
  type: guestLinkInfoRequests.ERROR,
  payload: data,
});

export const guestLinksByTagNameSuccess = links => ({
  type: guestLinksByTagNameRequests.SUCCESS,
  payload: {
    links,
  },
});
export const guestLinksByTagNameError = data => ({
  type: guestLinksByTagNameRequests.ERROR,
  payload: data,
});

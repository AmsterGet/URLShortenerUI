import {
  guestLinkInfoRequests,
  guestLinksRequests,
  CLEAR_GUEST_LINKS,
} from "../actionTypes/index";

export const clearGuestLinks = clearedValue => ({
  type: CLEAR_GUEST_LINKS,
  payload: {
    links: clearedValue,
  },
});

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

export const guestLinksSuccess = links => ({
  type: guestLinksRequests.SUCCESS,
  payload: {
    links,
  },
});
export const guestLinksError = data => ({
  type: guestLinksRequests.ERROR,
  payload: data,
});

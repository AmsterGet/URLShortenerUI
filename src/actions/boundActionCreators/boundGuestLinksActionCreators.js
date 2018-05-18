import axios from "axios";
import config from "../../config";
import {
  guestLinkInfoSuccess,
  guestLinkInfoError,
  guestLinksSuccess,
  guestLinksError,
  clearGuestLinks,
} from "../actionCreators/index";

export function boundGuestLinkInfo(dispatch) {
  return (data) => {
    axios({
      method: "get",
      url: `${config.api}/link/${data.shortUrl}/info`,
    })
      .then((response) => {
        if (Array.isArray(response.data)) {
          dispatch(guestLinksSuccess(response.data));
        } else {
          dispatch(guestLinkInfoSuccess(response.data));
          dispatch(guestLinksSuccess([response.data]));
        }
      })
      .catch((error) => {
        dispatch(guestLinkInfoError(error.response.data));
      });
  };
}

export function boundGuestLinksByTagName(dispatch) {
  return (data) => {
    axios({
      method: "get",
      url: `${config.api}/link/${data.shortUrl}/info/${data.tagName}`,
    })
      .then((response) => {
        dispatch(guestLinksSuccess(response.data));
      })
      .catch((error) => {
        dispatch(guestLinksError(error.response.data));
      });
  };
}

export function boundClearGuestLinks(dispatch) {
  return (data) => {
    dispatch(clearGuestLinks(data));
  };
}

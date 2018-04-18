import axios from "axios";
import config from "../../config";
import {
  guestLinkInfoSuccess,
  guestLinkInfoError,
  guestLinksByTagNameSuccess,
  guestLinksByTagNameError,
} from "../actionCreators/index";

export function boundGuestLinkInfo(dispatch) {
  return (data) => {
    axios({
      method: "get",
      url: `${config.api}/${data.shortLink}/info`,
    })
      .then((response) => {
        dispatch(guestLinkInfoSuccess(response.data));
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
      url: `${config.api}/${data.shortUrl}/info/${data.tagName}`,
    })
      .then((response) => {
        dispatch(guestLinksByTagNameSuccess(response.data));
      })
      .catch((error) => {
        dispatch(guestLinksByTagNameError(error.response.data));
      });
  };
}

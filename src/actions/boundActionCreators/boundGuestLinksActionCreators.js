import axios from "axios";
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
      url: `http://localhost:1212/${data.shortLink}/info`,
    })
      .then((response) => {
        console.log(response);
        dispatch(guestLinkInfoSuccess(response.data));
      })
      .catch((response) => {
        dispatch(guestLinkInfoError(response));
      });
  };
}

export function boundGuestLinksByTagName(dispatch) {
  return (data) => {
    axios({
      method: "get",
      url: `http://localhost:1212/${data.shortLink}/info/${data.tagName}`,
    })
      .then((response) => {
        dispatch(guestLinksByTagNameSuccess(response.data));
      })
      .catch((response) => {
        dispatch(guestLinksByTagNameError(response));
      });
  };
}


import axios from "axios";
import config from "../../config";
import {
  getLinksSuccess,
  getLinksError,
  addLinkSuccess,
  addLinkError,
} from "../actionCreators/index";

export function boundGetLinks(dispatch) {
  return (data) => {
    axios({
      method: "get",
      url: `${config.api}/user/${data.login}/links/`,
    })
      .then((response) => {
        dispatch(getLinksSuccess(response.data.links));
      })
      .catch((error) => {
        dispatch(getLinksError(error.response.data));
      });
  };
}

export function boundAddLink(dispatch, ownProps) {
  return (data) => {
    axios({
      method: "post",
      url: `${config.api}/user/${ownProps.userLogin}/links/`,
      data,
    })
      .then((response) => {
        dispatch(addLinkSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addLinkError(error.response.data));
      });
  };
}

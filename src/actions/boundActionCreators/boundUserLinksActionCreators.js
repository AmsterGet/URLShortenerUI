import axios from "axios";
import config from "../../config";
import {
  getLinksSuccess,
  getLinksError,
  addLinkSuccess,
  addLinkError,
  removeLinkSuccess,
  removeLinkError,
  editLinkSuccess,
  editLinkError,
} from "../actionCreators/index";

export function boundGetLinks(dispatch) {
  return () => {
    axios({
      method: "get",
      url: `${config.api}/user/links/`,
      withCredentials: true,
    })
      .then((response) => {
        // console.log(response);
        dispatch(getLinksSuccess(response.data.links));
      })
      .catch((error) => {
        dispatch(getLinksError(error.response.data));
      });
  };
}

export function boundAddLink(dispatch) {
  return (data) => {
    axios({
      method: "post",
      url: `${config.api}/user/links/`,
      withCredentials: true,
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

export function boundRemoveLink(dispatch) {
  return (data) => {
    axios({
      method: "delete",
      url: `${config.api}/user/links/`,
      withCredentials: true,
      data,
    })
      .then((response) => {
        dispatch(removeLinkSuccess(data));
      })
      .catch((error) => {
        dispatch(removeLinkError(error.response.data));
      });
  };
}

export function boundEditLink(dispatch) {
  return (data) => {
    axios({
      method: "put",
      url: `${config.api}/user/links/`,
      withCredentials: true,
      data,
    })
      .then((response) => {
        console.log(response.data);
        dispatch(editLinkSuccess(response.data));
      })
      .catch((error) => {
        dispatch(editLinkError(error.response.data));
      });
  };
}

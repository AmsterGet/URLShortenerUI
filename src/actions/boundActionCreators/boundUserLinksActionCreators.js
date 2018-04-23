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
  return (data) => {
    axios({
      method: "get",
      url: `${config.api}/user/${data.login}/links/`,
      withCredentials: true,
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
    console.log(ownProps);
    axios({
      method: "post",
      url: `${config.api}/user/${ownProps.userLogin}/links/`,
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

export function boundRemoveLink(dispatch, ownProps) {
  return (data) => {
    axios({
      method: "delete",
      url: `${config.api}/user/${ownProps.userLogin}/links/`,
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

export function boundEditLink(dispatch, ownProps) {
  return (data) => {
    axios({
      method: "put",
      url: `${config.api}/user/${ownProps.userLogin}/links/`,
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

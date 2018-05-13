import axios from "axios";
import config from "../../config";
import {
  getLinksSuccess,
  getLinksError,
  addLinksSuccess,
  addLinksError,
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
    console.log(data);
    const headers = {};
    const requestBody = {};
    // console.log(data);
    if (!data.originalUrl) {
      let formData = new FormData();
      formData.append("file", data);
      // formData.append("name", data.name);
      // headers["Content-Disposition"] = `form-data; name="";datafile=""; filename=${data.name}`;
      // headers["Content-Type"] = "application/octet-stream";
      headers["Content-type"] = "multipart/form-data";
      headers["Content-Disposition"] = `form-data; name="file"; filename=${data.name}"`;
      // data = formData;
      // headers["encType"] = "";
      requestBody.data = formData;
    } else {
      requestBody.data = data;
    }
    console.log(requestBody);
    axios({
      method: "post",
      url: `${config.api}/user/links/`,
      withCredentials: true,
      headers,
      ...requestBody,
    })
      .then((response) => {
        dispatch(addLinksSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addLinksError(error.response.data));
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

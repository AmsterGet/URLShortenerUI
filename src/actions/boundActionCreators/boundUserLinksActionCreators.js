import axios from "axios";
import {

} from "../actionCreators/index";

// export function boundGuestLinkInfo(dispatch) {
//   return (data) => {
//     axios({
//       method: "get",
//       url: `http://localhost:1212/${data.shortLink}/info`,
//     })
//       .then((response) => {
//         dispatch(guestLinkInfoSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(guestLinkInfoError(error.response.data));
//       });
//   };
// }
//
// export function boundGuestLinksByTagName(dispatch) {
//   return (data) => {
//     axios({
//       method: "get",
//       url: `http://localhost:1212/${data.shortUrl}/info/${data.tagName}`,
//     })
//       .then((response) => {
//         dispatch(guestLinksByTagNameSuccess(response.data));
//       })
//       .catch((error) => {
//         dispatch(guestLinksByTagNameError(error.response.data));
//       });
//   };
// }

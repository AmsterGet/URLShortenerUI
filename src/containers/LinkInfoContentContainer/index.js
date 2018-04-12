import { connect } from "react-redux";
import LinkInfoContent from "../../components/LinkInfoPage/LinkInfoContent";

function mapStateToProps(state) {
  return {
    originalUrl: state.guest.linkInfo.originalUrl,
    shortUrl: state.guest.linkInfo.shortUrl,
    description: state.guest.linkInfo.description,
    postDate: state.guest.linkInfo.postDate,
    tags: state.guest.linkInfo.tags,
    isPopupOpen: true,
  };
}

export default connect(mapStateToProps)(LinkInfoContent);

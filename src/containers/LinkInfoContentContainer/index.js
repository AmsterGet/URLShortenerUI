import { connect } from "react-redux";
import LinkInfoContent from "../../components/LinkInfoPage/LinkInfoContent";
import boundActionCreators from "../../actions/boundActionCreators/";

function mapStateToProps(state) {
  return {
    originalUrl: state.guest.linkInfo.originalUrl,
    shortUrl: state.guest.linkInfo.shortUrl,
    description: state.guest.linkInfo.description,
    postDate: state.guest.linkInfo.postDate,
    tags: state.guest.linkInfo.tags,
    links: state.guest.links,
    errorMessage: state.guest.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinksByTagName: boundActionCreators.boundGuestLinksByTagName(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInfoContent);

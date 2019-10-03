import { connect } from "react-redux";
import LinkInfoContent from "../../components/LinkInfoPage/LinkInfoContent";
import boundActionCreators from "../../actions/boundActionCreators/";

const guestSelector = (state) => state.guest || {}; 

function mapStateToProps(state) {
  const guest = guestSelector(state);
  return {
    originalUrl: guest.linkInfo.originalUrl,
    shortUrl: guest.linkInfo.shortUrl,
    description: guest.linkInfo.description,
    postDate: guest.linkInfo.postDate,
    tags: guest.linkInfo.tags,
    links: guest.links,
    errorMessage: guest.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinkInfo: boundActionCreators.boundGuestLinkInfo(dispatch),
    getLinksByTagName: boundActionCreators.boundGuestLinksByTagName(dispatch),
    clearGuestLinks: boundActionCreators.boundClearGuestLinks(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInfoContent);

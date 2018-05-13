import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import UserContent from "../../components/UserPage/UserContent/";

function mapStateToProps(state) {
  return {
    userData: state.user.userData,
    links: state.userLinks.links,
    isLoading: state.userLinks.isLoading,
    isError: state.userLinks.isError,
    errorMessage: state.userLinks.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinks: boundActionCreators.boundGetLinks(dispatch),
    addLink: boundActionCreators.boundAddLink(dispatch),
    removeLink: boundActionCreators.boundRemoveLink(dispatch),
    editLink: boundActionCreators.boundEditLink(dispatch),
    getLinkInfo: boundActionCreators.boundGuestLinkInfo(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);

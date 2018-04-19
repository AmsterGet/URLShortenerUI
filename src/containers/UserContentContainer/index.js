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

function mapDispatchToProps(dispatch, ownProps) {
  return {
    getLinks: boundActionCreators.boundGetLinks(dispatch),
    addLink: boundActionCreators.boundAddLink(dispatch, ownProps),
    // updateLink: boundActionCreators.boundUpdateLink(dispatch),
    // removeLink: boundActionCreators.boundRemoveLink(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);

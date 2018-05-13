import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import UserPage from "../../components/UserPage";

function mapStateToProps(state) {
  return {
    userData: state.user.userData,
    links: state.userLinks.links,
    usersList: state.usersList,
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
    getUsers: boundActionCreators.boundGetUsers(dispatch),
    removeUser: boundActionCreators.boundRemoveUser(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);

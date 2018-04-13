import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import UserContent from "../../components/UserPage/UserContent/";

function mapStateToProps(state) {
  return {
    userData: state.user.userData,
    links: state.user.links,
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    errorMessage: state.user.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // addLink: boundActionCreators.addLink(dispatch),
    // updateLink: boundActionCreators.updateLink(dispatch),
    // deleteLink: boundActionCreators.deleteLink(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContent);

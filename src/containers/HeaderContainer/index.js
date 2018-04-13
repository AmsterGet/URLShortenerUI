import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import Header from "../../components/Header/";

function mapStateToProps(state) {
  return {
    userData: state.user.userData,
    isLoading: state.user.isLoading,
    isError: state.user.isError,
    errorMessage: state.user.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: boundActionCreators.boundSignIn(dispatch),
    signUp: boundActionCreators.boundSignUp(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

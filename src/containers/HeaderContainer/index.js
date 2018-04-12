import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import Header from "../../components/Header/";

function mapStateToProps(state) {
  return {
    user: state.user,
    links: state.links,
    userIsAuth: !!state.user,
    isLoading: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage,
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

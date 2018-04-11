import { connect } from "react-redux";
import { boundSignIn, boundSignUp } from "../../actions/boundActionCreators";
import Header from "../../components/Header/index";

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
    signIn: boundSignIn(dispatch),
    signUp: boundSignUp(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

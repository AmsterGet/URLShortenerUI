import { connect } from "react-redux";
import $ from "jquery";
import { signInSuccess, signInError, signUpSuccess, signUpError } from "../actions/actionCreators";
import Header from "../components/Header";

function mapStateToProps(state) {
  return {
    user: state.user,
    links: state.links,
    isLoading: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage,
  };
}

function mapDispatchToProps(dispatch, state) {
  return {
    signIn: (userData) => {
      $.ajax({
        method: "POST",
        url: "http://localhost:1212/signIn",
        body: {
          login: userData.login,
          password: userData.password,
        },
      })
        .then((response) => {
          dispatch(signInSuccess(response));
        })
        .catch((response) => {
          dispatch(signInError(response));
        });
    },
    signUp: (userData) => {
      $.ajax({
        method: "POST",
        url: "http://localhost:1212/signUp",
        body: {
          login: userData.login,
          password: userData.password,
          name: userData.name,
          mail: userData.mail,
        },
      })
        .then((response) => {
          dispatch(signUpSuccess(response));
        })
        .catch((response) => {
          dispatch(signUpError(response));
        });
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);


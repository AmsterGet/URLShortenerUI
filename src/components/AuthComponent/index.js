import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import SnackBar from "../SnackBar";

const SignButtonContainer = styled.div`
  display: inline-block;
`;

const UserDataContainer = styled.span`
  margin-right: 15px;
`;

const customContentStyle = {
  width: "70%",
  maxWidth: "445px",
};

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSnackBar: false,
      isSigningUp: false,
      login: null,
      password: null,
      name: null,
      mail: null,
      snackMessage: "Wrong! Check your input, please!",
      errorMessage: "",
      isErrorShowed: false,
    };
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handlePopupOpen}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
      <SignButtonContainer>
        {this.state.isSigningUp ? <RaisedButton
          label="Sign In"
          primary={true}
          onClick={this.handleSign}
        /> : <RaisedButton
          label="Sign Up"
          primary={true}
          onClick={this.handleSign}
        />
        }
      </SignButtonContainer>,
    ];

    return (
      <div>
        { this.checkForError() }
        { this.props.userData ?
          <div>
            <UserDataContainer>
              <Link to={`/user/${this.props.userData.login}`}>
                {this.props.userData.name}
              </Link>
            </UserDataContainer>
            <RaisedButton label="Sign out"
                          onClick={this.handleSignOut}
                          primary={true}/>
            <Redirect to={`/user/${this.props.userData.login}`}/>
          </div> :
          <RaisedButton label="Sign in/up"
                        onClick={this.handlePopupOpen}
                        primary={true}/>
        }
        <SnackBar openSnackBar={this.state.openSnackBar}
                  handleSnackBarOpen={this.handleSnackBarOpen}
                  snackMessage={this.state.snackMessage}
        />
        <Dialog
          title="Welcome"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
          onRequestClose={this.handlePopupOpen}
        >
          { this.state.isSigningUp ? <div>
            <span>
                REGISTRATION! Please, fill in all fields for Sign Up!
            </span>
            <br/>
            <TextField floatingLabelText="Name"
                       onChange={this.handleNameChange}/>
            <br/>
            <TextField floatingLabelText="Email"
                       errorText={this.state.emailError}
                       onChange={this.handleMailChange}/>
            </div> : <div>
                <span>
                  Write down your login and password to sign in!
                </span>
              </div> }
          <TextField floatingLabelText="Login"
                     errorText={this.state.errorMessage}
                     onChange={this.handleLoginChange}/>
          <br/>
          <TextField floatingLabelText="Password"
                     type="password"
                     errorText={this.state.passwordError}
                     onChange={this.handlePasswordChange}/>
          <br/>
        </Dialog>
      </div>
    );
  }

  handlePopupOpen = () => {
    if (this.state.open) {
      this.setState({
        login: null,
        mail: null,
        name: null,
        password: null,
        errorMessage: "",
        emailError: false,
        passwordError: false,
      });
    }
    this.setState({
      open: !this.state.open,
      // isSigningUp: this.state.open,
      isErrorShowed: false,
    });
  };

  handleSnackBarOpen = () => {
    this.setState({
      openSnackBar: !this.state.openSnackBar,
    });
  };

  handleSignOut = () => {
    console.log("Outed");
    this.props.signOut(this.props.userData); // to dispatch into redux
  };

  handleSign = () => {
    this.setState({isSigningUp: !this.state.isSigningUp});
  };

  handleSubmit = () => {
    if (!this.isFullFilling()) {
      this.handleSnackBarOpen();
      return;
    }
    this.state.isSigningUp ? // to dispatch into redux
      this.props.signUp({
       login: this.state.login,
       mail: this.state.mail,
       name: this.state.name,
       password: this.state.password,
      }) :
      this.props.signIn({
        login: this.state.login,
        password: this.state.password,
      });
    this.clearState();
    this.handlePopupOpen();
  };

  checkForError = () => {
    if (this.state.errorMessage && !this.state.open && !this.state.isErrorShowed) {
      this.handleSnackBarOpen();
      this.setState({
        isErrorShowed: true,
      });
    }
  };

  clearState = () => {
    this.setState({
      login: null,
      mail: null,
      name: null,
      password: null,
      errorMessage: false,
      emailError: false,
      passwordError: false,
    });
  };

  isFullFilling = () => {
    let flag = true;
    if (this.state.isSigningUp) {
      if (!this.state.mail || !this.state.name) {
        flag = false;
      }
    }

    if (!this.state.login || !this.state.password) {
      flag = false;
    }
    return flag;
  };

  handleLoginChange = (event, newValue) => {
    this.setState({
        login: newValue,
        errorMessage: false,
    });
  };

  handleNameChange = (event, newValue) => {
    this.setState({
        name: newValue,
    });
  };

  handlePasswordChange = (event, newValue) => {
    let newStateObject;
    if (newValue.length<5) {
      newStateObject = {
        passwordError: "Too short password!",
      };
    } else {
      newStateObject = {
        password: newValue,
        isErrorShowed: false,
        passwordError: false,
        errorMessage: false,
      };
    }
    this.setState(newStateObject);
  };

  handleMailChange = (event, newValue) => {
    let newStateObject;
    if (!newValue.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
      newStateObject = {
        emailError: "Incorrect email!",
      };
    } else {
      newStateObject = {
        mail: newValue,
        isErrorShowed: false,
        emailError: false,
        errorMessage: false,
      };
    }
    this.setState(newStateObject);
  };

  componentWillReceiveProps(nextProps) {
    console.log("RECEIVE");
    this.setState({
      errorMessage: nextProps.errorMessage,
    });
  }
}

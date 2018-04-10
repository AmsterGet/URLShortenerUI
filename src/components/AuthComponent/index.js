import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import styled from "styled-components";

const SignButtonContainer = styled.div`
  display: inline-block;
`;

export default class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      isSigningUp: false,
      login: null,
      password: null,
      name: null,
      mail: null,
    };
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
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
        { this.props.userIsAuth ?
          <RaisedButton label="Sign out" onClick={this.handleSignOut} primary={true}/> :
          <RaisedButton label="Sign in" onClick={this.handleOpen} primary={true}/> }
        <Dialog
          title="Welcome"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          { this.state.isSigningUp ? <div>
            <span>
                Please, fill in all fields for register!
            </span>
            <br/>
            <TextField floatingLabelText="Name"
                       onChange={this.handleNameChange}/>
            <br/>
            <TextField floatingLabelText="Email"
                       onChange={this.handleMailChange}/>
            </div> : <div>
                <span>
                  Write down your login and password to sign in!
                </span>
              </div> }
          <TextField floatingLabelText="Login"
                     onChange={this.handleLoginChange}/>
          <br/>
          <TextField floatingLabelText="Password"
                     type="password"
                     onChange={this.handlePasswordChange}/>
          <br/>
        </Dialog>
      </div>
    );
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({
      open: false,
      isSigningUp: false
    });
  };

  handleSignOut = () => {
    console.log("Outed");
    // this.props.signOut(); // to dispatch in redux
  };

  handleSign = () => {
    this.setState({isSigningUp: !this.state.isSigningUp});
  };

  handleSubmit = () => {
    this.state.isSigningUp ? // to dispatch in redux
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
    console.log(this.state.login + "  " + this.state.password);
    this.handleClose();
  };

  handleLoginChange = (event, newValue) => {
    this.setState({
        login: newValue,
    });
  };

  handleNameChange = (event, newValue) => {
    this.setState({
        name: newValue,
    });
  };

  handlePasswordChange = (event, newValue) => {
    this.setState({
        password: newValue,
    });
  };

  handleMailChange = (event, newValue) => {
    this.setState({
        mail: newValue,
    });
  };
}

import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

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

export default class AuthComponent extends React.PureComponent {
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
  }

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
        { this.props.userData ?
          <div>
            <UserDataContainer>
              <Link to={`/user/${this.props.userData.login}/links`}>
                {this.props.userData.name}
              </Link>
            </UserDataContainer>
            <RaisedButton label="Sign out"
                          onClick={this.handleSignOut}
                          primary={true}/>
            <Redirect to={`/user/${this.props.userData.login}/links`}/>
          </div> :
          <RaisedButton label="Sign in"
                        onClick={this.handleOpen}
                        primary={true}/>
        }
        <Dialog
          title="Welcome"
          actions={actions}
          modal={true}
          open={this.state.open}
          contentStyle={customContentStyle}
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
    this.props.signOut(this.props.userData); // to dispatch into redux
  };

  handleSign = () => {
    this.setState({isSigningUp: !this.state.isSigningUp});
  };

  handleSubmit = () => {
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

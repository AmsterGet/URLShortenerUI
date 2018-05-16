import React from "react";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import SnackBar from "../SnackBar";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";

const NewUserPopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const customContentStyle = {
  width: "70%",
  maxWidth: "445px",
};

export default class NewUserPopup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSnackBar: false,
      login: null,
      password: null,
      name: null,
      mail: null,
      role: null,
      snackMessage: "Wrong! Check your input, please!",
      errorMessage: "",
      isErrorShowed: false,
    };
  }

  render() {
    console.log("RERENDER");
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
    ];

    return (
      <div>
        { this.checkForError() }
        <NewUserPopupWrapper>
          <RaisedButton
            label="Add user/admin"
            primary={true}
            onClick={this.handlePopupOpen}
          />
        </NewUserPopupWrapper>
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
          <TextField floatingLabelText="Name"
                     onChange={this.handleNameChange}/>
          <br/>
          <TextField floatingLabelText="Email"
                     onChange={this.handleMailChange}/>
          <TextField floatingLabelText="Login"
                     errorText={this.props.errorMessage}
                     onChange={this.handleLoginChange}/>
          <br/>
          <TextField floatingLabelText="Password"
                     type="password"
                     errorText={this.props.errorMessage}
                     onChange={this.handlePasswordChange}/>
          <SelectField
            floatingLabelText="Role"
            value={this.state.role}
            onChange={this.handleSelectFieldChange}
          >
            <MenuItem value={"user"} primaryText="User" />
            <MenuItem value={"admin"} primaryText="Admin" />
          </SelectField>
        </Dialog>
      </div>
    );
  }

  handleSelectFieldChange = (event, index, value) => {
    this.setState({
      role: value,
    })
  };

  handlePopupOpen = () => {
    this.setState({
      open: !this.state.open,
      isErrorShowed: false,
    });
  };

  handleSnackBarOpen = () => {
    this.setState({
      openSnackBar: !this.state.openSnackBar,
    });
  };

  handleSubmit = () => {
    if (!this.isFullFilling()) {
      this.handleSnackBarOpen();
      return;
    }
    this.props.addUser ? () => 1 : "";
    // this.props.addUser({ // to dispatch into redux
    //   login: this.state.login,
    //   mail: this.state.mail,
    //   name: this.state.name,
    //   password: this.state.password,
    //   role: this.state.role,
    // });
    this.clearState();
    this.handlePopupOpen();
  };

  checkForError = () => {
    if (this.state.errorMessage && !this.state.open && !this.state.isErrorShowed) {
      this.handleSnackBarOpen();
      this.setState({
        isErrorShowed: true,
        errorMessage: "",
      });
    }
  };

  clearState = () => {
    this.setState({
      login: null,
      mail: null,
      name: null,
      password: null,
    });
  };

  isFullFilling = () => {
    let flag = true;
    if (this.state.isSigningUp) {
      if (!this.state.mail ||
        !this.state.mail.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)
        || !this.state.name) {
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

  componentWillReceiveProps(nextProps) {
    console.log("RECEIVE");
    if (nextProps.errorMessage) {
      this.setState({
        errorMessage: nextProps.errorMessage,
      });
    }
  }
}

import React from "react";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import SnackBar from "../SnackBar";
import AttachmentInput from "../AttachmentInput";

const NewLinkPopupWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default class NewLinkPopup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openSnackBar: false,
      isTextInputsDisabled: false,
      originalUrl: "",
      description: "",
      tags: "",
      snackMessage: "Fill in all fields, please!",
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
    ];

    return (
      <div>
        <NewLinkPopupWrapper>
          <RaisedButton
            label="Shorten new link"
            primary={true}
            onClick={this.handlePopupOpen}
          />
        </NewLinkPopupWrapper>
        <SnackBar openSnackBar={this.state.openSnackBar}
                  handleSnackBarOpen={this.handleSnackBarOpen}
                  snackMessage={this.state.snackMessage}
        />
        <Dialog
          title="Fill in all fields, please!"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handlePopupOpen}
          autoScrollBodyContent={true}
        >
        <TextField floatingLabelText="Your really big link here"
                   disabled={this.state.isTextInputsDisabled}
                   fullWidth={true}
                   onChange={this.handleLinkChange}/>
        <br/>
        <TextField floatingLabelText="Link's description"
                   disabled={this.state.isTextInputsDisabled}
                   multiLine={true}
                   rows={2}
                   fullWidth={true}
                   onChange={this.handleDescriptionChange}/>
        <br/>
        <TextField floatingLabelText="Link's tags for provide fast search"
                   disabled={this.state.isTextInputsDisabled}
                   fullWidth={true}
                   onChange={this.handleTagsChange}/>
        <AttachmentInput handleAttach={this.handleAttach}/>
        </Dialog>
      </div>
    );
  }

  handleAttach = (event) => {
    event.target.value ? this.setState({
      isTextInputsDisabled: true,
    }) : "";
  };

  handlePopupOpen = () => {
    this.setState({
      open: !this.state.open,
      isTextInputsDisabled: false,
    });
  };

  handleSnackBarOpen = () => {
    this.setState({
      openSnackBar: !this.state.openSnackBar,
    });
  };

  handleSubmit = () => {
    if (!this.isFullFilling() && !this.state.isTextInputsDisabled) {
      this.handleSnackBarOpen();
      return;
    }
    let tagsToDispatch = this.state.tags;
    tagsToDispatch = tagsToDispatch.replace(/[,\s]+/gm, ", ");
    this.props.addLink({ // to dispatch into redux
      originalUrl: this.state.originalUrl,
      description: this.state.description,
      tags: tagsToDispatch,
    });
    this.handlePopupOpen();
  };

  isFullFilling = () => {
    let flag = true;
    if (!this.state.originalUrl || !this.state.description || !this.state.tags) {
      flag = false;
    }

    return flag;
  };

  handleLinkChange = (event, newValue) => {
    this.setState({
      originalUrl: newValue,
    });
  };
  handleDescriptionChange = (event, newValue) => {
    this.setState({
      description: newValue,
    });
  };
  handleTagsChange = (event, newValue) => {
    this.setState({
      tags: newValue,
    });
  };
}

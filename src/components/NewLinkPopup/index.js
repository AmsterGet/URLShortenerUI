import React from "react";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";

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
      originalUrl: "",
      description: "",
      tags: "",
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
    ];

    return (
      <div>
        <NewLinkPopupWrapper>
          <RaisedButton
            label="Shorten new link"
            primary={true}
            onClick={this.handleOpen}
          />
        </NewLinkPopupWrapper>
        <Dialog
          title="Fill in all fields, please!"
          actions={actions}
          modal={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
        <TextField floatingLabelText="Your really big link here"
                   fullWidth={true}
                   onChange={this.handleLinkChange}/>
        <br/>
        <TextField floatingLabelText="Link description"
                   multiLine={true}
                   rows={2}
                   fullWidth={true}
                   onChange={this.handleDescriptionChange}/>
        <br/>
        <TextField floatingLabelText="Link's tags for provide fast search"
                   fullWidth={true}
                   onChange={this.handleTagsChange}/>
        </Dialog>
      </div>
    );
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = () => {
    let tagsToDispatch = this.state.tags;
    tagsToDispatch = tagsToDispatch.replace(/[,\s]+/gm, ", ");
    this.props.addLink({ // to dispatch into redux
      originalUrl: this.state.originalUrl,
      description: this.state.description,
      tags: tagsToDispatch,
    });
    this.handleClose();
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

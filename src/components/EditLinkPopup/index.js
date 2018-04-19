import React from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

export default class EditLinkPopup extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
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
      <React.Fragment>
        { this.props.link.shortUrl ? <Dialog
            title="Edit link!"
            actions={actions}
            modal={true}
            open={this.state.isOpen}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
          <TextField floatingLabelText="Link's description"
                     multiLine={true}
                     rows={2}
                     fullWidth={true}
                     defaultValue={this.props.link.description}
                     onChange={this.handleDescriptionChange}/>
          <br/>
          <TextField floatingLabelText="Link's tags for provide fast search"
                     fullWidth={true}
                     defaultValue={
                       this.props.link.tags.map((tag) => {
                         return `${tag.tagName}`
                         }).join(", ")
                     }
                     onChange={this.handleTagsChange}/>
        </Dialog> : "" }
      </React.Fragment>
    );
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleSubmit = () => {
    let tagsToDispatch = this.state.tags;
    tagsToDispatch = tagsToDispatch.replace(/[,\s]+/gm, ", ");
    this.props.editLinkHandle({ // to dispatch into redux
      description: this.state.description,
      tags: tagsToDispatch,
      shortUrl: this.props.link.shortUrl,
    });
    this.handleClose();
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.link.shortUrl) {
      this.setState({
        isOpen: true,
        description: nextProps.link.description,
        tags: nextProps.link.tags.map((tag) => {
          return `${tag.tagName}`
        }).join(", ")
      });
    }
  }
}

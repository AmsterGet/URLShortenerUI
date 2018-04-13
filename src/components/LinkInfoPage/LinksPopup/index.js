import React from "react";
import styled from "styled-components";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import LinksTable from "../../LinksTable";

const InfoPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const customContentStyle = {
  width: "95%",
  maxWidth: "none",
};

export default class LinksPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: !!this.props.links && this.props.isTagClicked,
    };
  }

  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <InfoPageWrapper>
        <Dialog
          title="Found links"
          actions={actions}
          modal={true}
          contentStyle={customContentStyle}
          autoScrollBodyContent={true}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <LinksTable links={this.props.links}/>
        </Dialog>
      </InfoPageWrapper>
    );
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
    this.props.changeTagClickState();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: !!nextProps.links && nextProps.isTagClicked,
    });
  }
}

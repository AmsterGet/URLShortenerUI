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

export default class LinksPopup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.isPopupOpen,
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
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <LinksTable/>
        </Dialog>
      </InfoPageWrapper>
    );
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };
}

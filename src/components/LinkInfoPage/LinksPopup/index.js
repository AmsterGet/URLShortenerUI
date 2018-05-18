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
      open: this.props.isButtonClicked, // !!this.props.links &&
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
        <Dialog title="Found links"
                actions={actions}
                modal={true}
                contentStyle={customContentStyle}
                autoScrollBodyContent={true}
                open={this.state.open}
                onRequestClose={this.handleClose}
        >
          {
            !this.props.links ? this.props.errorMessage :
              <LinksTable isLinksForInfo={this.props.isLinksForInfo || false}
                          getLinkInfo={this.props.getLinkInfo}
                          handleClosePopup={this.handleClose}
                          links={this.props.links}/>
          }
        </Dialog>
      </InfoPageWrapper>
    );
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
    this.props.changeButtonClickState();
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: nextProps.isButtonClicked, // !!nextProps.links &&
    });
  }
}

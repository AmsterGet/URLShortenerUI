import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import InfoParagraph from "../../InfoParagraph";
import AppInnerContainer from "../../AppInnerContainer";

const GetLinkInfoSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: #00abff17;
    margin-top: 80px;
    padding: 30px 0;
`;

const GetLinkInfoSectionInnerAligner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export default class GetLinkInfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortLink: null,
      isInfoButtonClicked: false,
    };
  }

  render() {
    return (
      <GetLinkInfoSectionContainer>
        <AppInnerContainer>
          <GetLinkInfoSectionInnerAligner>
            <InfoParagraph>
              But you can see information about Short Link without either account!
            </InfoParagraph>
            <TextField floatingLabelText="Write down short link here"
                       onChange={this.handleShortLinkChange}/>
            <br/>
            <RaisedButton label="Get Short Link info"
                          primary={true}
                          onClick={this.handleLinkInfo}>
              { this.state.isInfoButtonClicked ?
                <Redirect to="/info"/> :
                "" }
            </RaisedButton>
          </GetLinkInfoSectionInnerAligner>
        </AppInnerContainer>
      </GetLinkInfoSectionContainer>
    );
  }

  handleShortLinkChange = (event, newValue) => {
    console.log(newValue);
    newValue = newValue.replace(/^http([\s\S]*)[/]/gim, "");
    this.setState({
      shortLink: newValue,
    });
  };

  handleLinkInfo = () => {
    if (!this.state.shortLink) return;
    this.props.getLinkInfo({ // to dispatch into redux
      shortLink: this.state.shortLink,
    });
    this.setState({
      isInfoButtonClicked: true,
    });
  }
}

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import HomePageInfoParagraph from "../HomePageInfoParagraph";
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
    };
  }

  render() {
    return (
      <GetLinkInfoSectionContainer>
        <AppInnerContainer>
          <GetLinkInfoSectionInnerAligner>
            <HomePageInfoParagraph>
              But you can see information about Short Link without either account!
            </HomePageInfoParagraph>
            <TextField floatingLabelText="Write down short link here"
                       onChange={this.handleShortLinkChange}/>
            <br/>
            <Link to="/info">
              <RaisedButton
                label="Get Short Link info"
                primary={true}
                onClick={this.handleLinkInfo}
              />
            </Link>
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
  }
}

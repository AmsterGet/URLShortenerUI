import React from "react";
import { Link, Redirect } from "react-router-dom";
import styled from "styled-components";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import InfoParagraph from "../../InfoParagraph";

const LinkInfoSectionWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background-color: rgba(0, 171, 255, 0.09);
    margin-top: 80px;
    padding: 30px 0;
`;

const LinkInfoSectionInnerAligner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export default class LinkInfoSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortUrl: null,
      isInfoButtonClicked: false,
    };
  }

  render() {
    return (
      <LinkInfoSectionWrapper>
        <div className="inner-container">
          <LinkInfoSectionInnerAligner>
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
          </LinkInfoSectionInnerAligner>
        </div>
      </LinkInfoSectionWrapper>
    );
  }

  handleShortLinkChange = (event, newValue) => {
    console.log(newValue);
    newValue = newValue.replace(/^http([\s\S]*)[/]/gim, "");
    this.setState({
      shortUrl: newValue,
    });
  };

  handleLinkInfo = () => {
    if (!this.state.shortUrl) return;
    this.props.getLinkInfo({ // to dispatch into redux
      shortUrl: this.state.shortUrl,
    });
    this.setState({
      isInfoButtonClicked: true,
    });
  }
}

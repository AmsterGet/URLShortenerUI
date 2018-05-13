import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import LinksTable from "../../LinksTable";
import InfoParagraph from "../../InfoParagraph";
import NewLinkPopup from "../../NewLinkPopup";
import config from "../../../config/index";

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default class UserContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.links ? <UserPageWrapper>
          <InfoParagraph>
            There are your links!
          </InfoParagraph>
          <ButtonsContainer>
            <NewLinkPopup addLink={this.props.addLink}/>
            <a href={`${config.api}/file/csv/links/`}>
              <RaisedButton
                label="Get all in CSV"
                primary={true}
              />
            </a>
          </ButtonsContainer>
          <LinksTable links={this.props.links}
                      editLink={this.props.editLink}
                      removeLink={this.props.removeLink}
                      getLinkInfo={this.props.getLinkInfo}
                      userData={this.props.userData}/>
        </UserPageWrapper> : ""}
      </div>
    );
  }

  componentDidMount() {
    this.props.userData ? this.props.getLinks() : "";
  }
}

import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import LinksTable from "../../LinksTable";
import InfoParagraph from "../../InfoParagraph";
import NewLinkPopup from "../../NewLinkPopup";

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default class UserContent extends React.Component {
  render() {
    return (
      <div>
        { this.props.links ? <UserPageWrapper>
          <InfoParagraph>
            There are your links!
          </InfoParagraph>
          <NewLinkPopup addLink={this.props.addLink}/>
          <LinksTable links={this.props.links}
                      userData={this.props.userData}/>
        </UserPageWrapper> : <Redirect to="/"/> }
      </div>
  );
  }
}

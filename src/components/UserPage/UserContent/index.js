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
        { this.props.userData ?
          (this.props.links ? <UserPageWrapper>
            <InfoParagraph>
              There are your links!
            </InfoParagraph>
            <NewLinkPopup addLink={this.props.addLink}/>
            <LinksTable links={this.props.links}
                        editLink={this.props.editLink}
                        removeLink={this.props.removeLink}
                        userData={this.props.userData}/>
          </UserPageWrapper> : "")
          : <Redirect to="/"/> }
      </div>
    );
  }

  componentDidMount() {
    this.props.getLinks({
      login: this.props.userData.login,
    });
  }
}

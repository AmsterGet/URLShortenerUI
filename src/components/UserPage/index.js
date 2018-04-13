import React from "react";
import styled from "styled-components";
import UserContentContainer from "../../containers/UserContentContainer";
import AppInnerContainer from "../AppInnerContainer";

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default class UserPage extends React.Component {
  render() {
    return (
      <UserPageWrapper>
        <AppInnerContainer>
          <UserContentContainer/>
        </AppInnerContainer>
      </UserPageWrapper>
    );
  }
}

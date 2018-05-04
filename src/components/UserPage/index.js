import React from "react";
import styled from "styled-components";
import UserContentContainer from "../../containers/UserContentContainer";

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
        <div className="inner-container">
          <UserContentContainer/>
        </div>
      </UserPageWrapper>
    );
  }
}

import React from "react";
import styled from "styled-components";

const NotFoundPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <NotFoundPageWrapper>
        <span>
          You see this text, because page not found!
        </span>
      </NotFoundPageWrapper>
    );
  }
}

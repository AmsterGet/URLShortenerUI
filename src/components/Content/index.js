import React, { PureComponent } from "react";
import styled from "styled-components";

const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align_items: center;
    width: 100%;
    margin-top: 30px;
`;

export default class Content extends PureComponent {
  render() {
    return (
      <ContentWrapper>

      </ContentWrapper>
    );
  }
}

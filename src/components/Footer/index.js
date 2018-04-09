import React, { PureComponent } from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    // margin-top: 30px;
    border-top: 1px solid gray;
    height: 80px;
    flex: 0 0 auto;
`;

export default class Footer extends PureComponent {
  render() {
    return (
      <FooterContainer>
        <span>
          It is a footer
        </span>
        <span>
          Some contact information will be here
        </span>
      </FooterContainer>
    );
  }
}

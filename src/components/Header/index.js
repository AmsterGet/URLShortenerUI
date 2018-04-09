import React, { PureComponent } from "react";
import styled from "styled-components";
import AuthComponent from "../AuthComponent";

const HeaderWrapper = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid gray;
`;

export default class Header extends PureComponent {
  render() {
    return (
      <HeaderWrapper>
        <span>UrlShortener</span>
        <AuthComponent
          signIn = {this.props.signIn}
          signUp = {this.props.signUp}
          user = {this.props.user}
        />
      </HeaderWrapper>
    );
  }
}

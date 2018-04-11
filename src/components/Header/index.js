import React from "react";
import styled from "styled-components";
import AuthComponent from "../AuthComponent"
import AppInnerContainer from "../AppInnerContainer";

const HeaderWrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid gray;
    background: #06ffc91c;
`;

const HeaderInnerAligner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const Logo = styled.span`
    font-size: 20px;
    font-family: LifehackBasic-Regular;
    font-weight: 600;
`;

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper>
        <AppInnerContainer>
          <HeaderInnerAligner>
            <Logo>UrlShortener</Logo>
            <AuthComponent
              signIn = { this.props.signIn }
              signUp = { this.props.signUp }
              userIsAuth = { this.props.userIsAuth }
            />
          </HeaderInnerAligner>
        </AppInnerContainer>
      </HeaderWrapper>
    );
  }
}

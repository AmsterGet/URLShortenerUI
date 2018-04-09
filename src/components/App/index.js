import React, { PureComponent } from "react";
import styled from "styled-components";
import HeaderContainer from "../../containers/HeaderContainer";
import Content from "../Content";
import Footer from "../Footer";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 auto;
    width: 100%;
`;

const AppInnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    max-width: 1280px;
    width: 100%;
    height: 100vh;
`;

export default class App extends PureComponent {
  render() {
    return (
      <Container>
        <AppInnerContainer>
          <Container>
            <HeaderContainer />
            <Content />
          </Container>
          <Footer />
        </AppInnerContainer>
      </Container>
    );
  }
}

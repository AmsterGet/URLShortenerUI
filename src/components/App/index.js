import React from "react";
import styled from "styled-components";
import HeaderContainer from "../../containers/HeaderContainer/index";
import Content from "../Content";
import Footer from "../Footer";
import "./index.css";

const WrappedContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    flex: 1 0 auto;
    width: 100%;
`;

export default class App extends React.Component {
  render() {
    return (
      <WrappedContainer>
        <Container>
          <HeaderContainer />
          <Content />
        </Container>
        <Footer />
      </WrappedContainer>
    );
  }
}

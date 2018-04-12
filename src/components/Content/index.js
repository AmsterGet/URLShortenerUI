import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../HomePage";
import LinkInfoPage from "../LinkInfoPage";

const ContentWrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 40px;
`;

export default class Content extends React.Component {
  render() {
    return (
      <ContentWrapper>
        <Route exact path="/" component = { HomePage } />
        <Route strict path="/info" component = { LinkInfoPage } />
        {/*<Route path="/:login/links" copmonent = { UserPage } />*/}
      </ContentWrapper>
    );
  }
}

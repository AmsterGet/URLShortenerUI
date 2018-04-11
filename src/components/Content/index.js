import React from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../HomePage";

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
        <Route path="/" component = { HomePage } />
        {/*<Route path="/:shortUrl/info" component = { LinkInfoPage } />*/}
        {/*<Route path="/:login/links" copmonent = { UserPage } />*/}
      </ContentWrapper>
    );
  }
}

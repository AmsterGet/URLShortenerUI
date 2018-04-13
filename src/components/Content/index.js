import React from "react";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomePage from "../HomePage";
import LinkInfoPage from "../LinkInfoPage";
import UserPage from "../UserPage";
import NotFoundPage from "../NotFoundPage";

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
        <Switch>
          <Route exact path="/" component = { HomePage } />
          <Route strict exact path="/info" component = { LinkInfoPage } />
          <Route strict exact path="/user/:login/links" component = { UserPage } />
          <Route component = { NotFoundPage } />
        </Switch>
      </ContentWrapper>
    );
  }
}

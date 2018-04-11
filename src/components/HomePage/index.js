import React from "react";
import styled from "styled-components";
import HomeInfoSection from "./HomeInfoSection";
import GetLinkInfoSectionContainer from "../../containers/GetLinkInfoSectionContainer";

const HomePageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

export default class HomePage extends React.Component {
  render() {
    return (
      <HomePageWrapper>
        <HomeInfoSection/>
        <GetLinkInfoSectionContainer/>
      </HomePageWrapper>
    );
  }
}

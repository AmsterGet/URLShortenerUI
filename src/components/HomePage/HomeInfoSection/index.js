import React from "react";
import styled from "styled-components";
import HomePageInfoParagraph from "../HomePageInfoParagraph";
import AppInnerContainer from "../../AppInnerContainer";

const HomeInfoSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const HomeInfoSectionInnerAligner = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export default class HomeInfoSection extends React.Component {
  render() {
    return (
      <HomeInfoSectionContainer>
        <AppInnerContainer>
          <HomeInfoSectionInnerAligner>
            <HomePageInfoParagraph>
              If you want to create your own Short Link, please, Sign in!
            </HomePageInfoParagraph>
            <HomePageInfoParagraph>
              If you haven't account, please, Sign Up!
            </HomePageInfoParagraph>
          </HomeInfoSectionInnerAligner>
        </AppInnerContainer>
      </HomeInfoSectionContainer>
    );
  }
}

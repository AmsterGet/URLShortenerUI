import React from "react";
import styled from "styled-components";
import InfoParagraph from "../../InfoParagraph";
import AppInnerContainer from "../../AppInnerContainer";

const HomeInfoSectionContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
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
        <div className="inner-container">
          <HomeInfoSectionInnerAligner>
            <InfoParagraph>
              If you want to create your own Short Link, please, Sign in!
            </InfoParagraph>
            <InfoParagraph>
              If you haven't account, please, Sign Up!
            </InfoParagraph>
          </HomeInfoSectionInnerAligner>
        </div>
      </HomeInfoSectionContainer>
    );
  }
}

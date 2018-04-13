import React from "react";
import styled from "styled-components";
import LinkInfoContentContainer from "../../containers/LinkInfoContentContainer";

const InfoPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
`;

const InfoPageHeader = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: LifehackBasic-Regular;
    margin-bottom: 50px;
`;

export default class LinkInfoPage extends React.Component {
  render() {
    return (
      <InfoPageWrapper>
        <InfoPageHeader>
          Info about Short Link
        </InfoPageHeader>
        <LinkInfoContentContainer />
      </InfoPageWrapper>
    );
  }
}

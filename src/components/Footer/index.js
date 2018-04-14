import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid gray;
    height: 70px;
    flex: 0 0 auto;
    margin-top: 30px;
    font-size: 19px;
    font-family: LifehackBasic-Regular;
    font-weight: 500;
    background-color: #8080802e;
`;

const FooterInnerAligner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    @media (max-width: 650px) {
      flex-direction: column;
    }
`;

export default class Footer extends React.Component {
  render() {
    return (
      <FooterContainer>
        <div className="inner-container">
          <FooterInnerAligner>
            <span>
            It is a footer
            </span>
            <span>
            Some contact information will be here
            </span>
          </FooterInnerAligner>
        </div>
      </FooterContainer>
    );
  }
}

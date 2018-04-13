import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import LinksTable from "../../LinksTable";
import InfoParagraph from "../../InfoParagraph";

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const AddLinkComponent = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const AddLinkContainer = styled.div`
  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
  }
`;

const inputStyles = {
  marginRight: "18px",
};

const AddLinkHeader = styled.h3`
  font-size: 18px;
  @media (max-width: 650px) {
    font-size: 14px;
  }
`;

export default class UserContent extends React.Component {
  render() {
    return (
      <UserPageWrapper>
        <InfoParagraph>
          There are your links!
        </InfoParagraph>
        <AddLinkComponent>
          <AddLinkHeader>
            Add your new link now!
          </AddLinkHeader>
          <AddLinkContainer>
            <TextField floatingLabelText="Your really big LINK"
                       style={inputStyles}
                       onChange={this.handleNameChange}
            />
            <RaisedButton
              label="Submit"
              primary={true}
              onClick={this.handleSign}
            />
          </AddLinkContainer>
        </AddLinkComponent>
        <LinksTable links={this.props.links}/>
      </UserPageWrapper>
    );
  }
}

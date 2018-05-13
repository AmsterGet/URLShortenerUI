import React from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";
import InfoParagraph from "../../InfoParagraph";
import UsersTable from "../../UsersTable";
import config from "../../../config/index";

const UserPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default class AdminContent extends React.Component {
  render() {
    return (
      <div>
        {this.props.usersList.users ? <UserPageWrapper>
          <InfoParagraph>
            There are all users!
          </InfoParagraph>
          <a href={`${config.api}/file/csv/users`}>
            <RaisedButton
              label="Get all in CSV"
              primary={true}
            />
          </a>
          <UsersTable users={this.props.usersList.users}
                      removeUser={this.props.removeUser}/>
        </UserPageWrapper> : ""}
      </div>
    );
  }

  componentDidMount() {
    this.props.userData ? this.props.getUsers() : ""; // else sign out
  }
}



import React from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import UserContent from "./UserContent";
import AdminContent from "./AdminContent";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

export default class UserPage extends React.Component {
  render() {
    return (
      <Root>
        <div className="inner-container">
          <div>
            { this.props.userData ?
              (this.props.userData.role !== "admin" ?
                <UserContent
                  addLink={this.props.addLink}
                  links={this.props.links}
                  getLinks={this.props.getLinks}
                  editLink={this.props.editLink}
                  removeLink={this.props.removeLink}
                  getLinkInfo={this.props.getLinkInfo}
                  userData={this.props.userData}
                /> :
                <AdminContent
                  errorMessage={this.props.errorMessage}
                  userData={this.props.userData}
                  usersList={this.props.usersList}
                  getUsers={this.props.getUsers}
                  addUser={this.props.addUser}
                  removeUser={this.props.removeUser}
                />)
              : <Redirect to="/"/> }
          </div>
        </div>
      </Root>
    );
  }
}

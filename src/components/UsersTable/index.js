import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
} from 'material-ui/Table';
import UsersTableHeader from "./UsersTableHeader";
import UsersTableBody from "./UsersTableBody";

export default class UsersTable extends React.Component {
  state = {
    fixedHeader: true,
    showRowHover: true,
    showCheckboxes: false,
    deselectOnClickaway: true,
  };

  render() {
    return (
      <Table fixedHeader={this.state.fixedHeader}>
        <TableHeader displaySelectAll={this.props.showCheckboxes}
                     adjustForCheckbox={this.props.showCheckboxes}>
          <UsersTableHeader userData={this.props.userData}/>
        </TableHeader>
        <TableBody displayRowCheckbox={this.props.showCheckboxes}
                   deselectOnClickaway={this.props.deselectOnClickaway}
                   showRowHover={this.props.showRowHover}>
        <UsersTableBody userData={this.props.userData}
                        users={this.props.users}
                        removeUser={this.props.removeUser}/>
        </TableBody>
      </Table>
    );
  }
}

import React from "react";
import {
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import config from "../../../config/index";

const customOptionsStyle = {
  textOverflow: "clip",
};

export default class UsersTableBody extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.users.map( (user, index) => (
          <TableRow key={index}>
            <TableRowColumn>
              {user.login}
            </TableRowColumn>
            <TableRowColumn>
              {user.name}
            </TableRowColumn>
            <TableRowColumn className="media-table-column">
              {user.mail}
            </TableRowColumn>
            <TableRowColumn>
              {user.role}
            </TableRowColumn>
            <TableRowColumn>
              {user.linksQuantity || "-"}
            </TableRowColumn>
            <TableRowColumn className="options-table-column" style={customOptionsStyle}>
              <IconMenu
                iconButtonElement={ <IconButton><MoreVertIcon/></IconButton> }
                anchorOrigin={ { horizontal: "right", vertical: "top" } }
                targetOrigin={ { horizontal: "right", vertical: "top" } }
                login={user.login}
                onItemClick={this.handleMenuClick}
              >
                <MenuItem primaryText="Remove"/>
                <a href={`${config.api}/file/csv/users/${user.login}`}>
                  <MenuItem primaryText="Download CSV"/>
                </a>
              </IconMenu>
            </TableRowColumn>
          </TableRow>
        ))}
      </React.Fragment>
    );
  }

  handleMenuClick = (event, child) => {
    const login = event.currentTarget.parentNode.parentNode.getAttribute("login");
    switch (child.props.primaryText) {
      case "Remove":
        this.props.removeUser({ login });
        break;
      default:
        return;
    }
  }
}

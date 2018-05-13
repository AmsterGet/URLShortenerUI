import React from "react";
import {
  TableHeaderColumn,
  TableRow,
} from "material-ui/Table";

const customOptionsStyle = {
  "textOverflow": "clip",
};

export default class UsersTableHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TableRow>
          <TableHeaderColumn>
            User login
          </TableHeaderColumn>
          <TableHeaderColumn>
            User name
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column">
            User email
          </TableHeaderColumn>
          <TableHeaderColumn>
            Created links
          </TableHeaderColumn>
          <TableHeaderColumn className="options-table-column" style={customOptionsStyle}/>
        </TableRow>
      </React.Fragment>
    );
  }
}

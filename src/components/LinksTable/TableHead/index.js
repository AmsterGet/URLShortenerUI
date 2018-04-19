import React from "react";
import {
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

export default class TableHead extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TableRow>
          <TableHeaderColumn tooltip="Short Url">Short Url</TableHeaderColumn>
          <TableHeaderColumn className={this.props.userData ? "media-table-column" : ""} tooltip="Original Url">
            Original Url
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column" tooltip="Description">Description</TableHeaderColumn>
          <TableHeaderColumn className="media-table-column" tooltip="Post date">Post date</TableHeaderColumn>
          { this.props.userData ? <TableHeaderColumn tooltip="Transitions">
            Transitions
          </TableHeaderColumn> : ""
          }
        </TableRow>
      </React.Fragment>
    );
  }
}

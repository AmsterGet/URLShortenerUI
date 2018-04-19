import React from "react";
import {
  TableHeaderColumn,
  TableRow,
} from "material-ui/Table";
import "../index.css";

const customOptionsStyle = {
  "textOverflow": "clip",
};

export default class LinksTableHeader extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TableRow>
          <TableHeaderColumn tooltip="Short Url">
            Short Url
          </TableHeaderColumn>
          <TableHeaderColumn className={this.props.userData ? "media-table-column" : ""} tooltip="Original Url">
            Original Url
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column" tooltip="Description">
            Description
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column" tooltip="Post date">
            Post date
          </TableHeaderColumn>
          { this.props.userData ? <React.Fragment>
            <TableHeaderColumn className="transitions-table-column" tooltip="Transitions">
              Transitions
            </TableHeaderColumn>
            <TableHeaderColumn className="options-table-column" style={customOptionsStyle} tooltip="Options"/>
          </React.Fragment> : "" }
        </TableRow>
      </React.Fragment>
    );
  }
}

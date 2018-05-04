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
          <TableHeaderColumn>
            Short Url
          </TableHeaderColumn>
          <TableHeaderColumn className={this.props.userData ? "media-table-column" : ""}>
            Original Url
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column">
            Description
          </TableHeaderColumn>
          <TableHeaderColumn className="media-table-column">
            Post date
          </TableHeaderColumn>
          { this.props.userData ? <React.Fragment>
            <TableHeaderColumn className="transitions-table-column">
              Transitions
            </TableHeaderColumn>
            <TableHeaderColumn className="options-table-column" style={customOptionsStyle}/>
          </React.Fragment> : "" }
        </TableRow>
      </React.Fragment>
    );
  }
}

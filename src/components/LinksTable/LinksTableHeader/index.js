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
          { !this.props.isLinksForInfo ? <TableHeaderColumn className={this.props.userData ? "media-table-column" : ""}>
              Original Url
          </TableHeaderColumn> : "" }
          <TableHeaderColumn className="media-table-column">
            Description
          </TableHeaderColumn>
          { !this.props.isLinksForInfo ? <TableHeaderColumn className="media-table-column">
              Post date
          </TableHeaderColumn> : "" }
          { this.props.userData ?
            <TableHeaderColumn className="transitions-table-column">
              Transitions
            </TableHeaderColumn> : "" }
          { this.props.isLinksForInfo || this.props.userData ?
            <TableHeaderColumn className="options-table-column"
                               style={customOptionsStyle}/> : ""}
        </TableRow>
      </React.Fragment>
    );
  }
}

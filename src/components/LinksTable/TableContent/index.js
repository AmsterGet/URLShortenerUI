import React from "react";
import {
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import config from "../../../config";

const customContentStyle = {
  width: "auto",
};

export default class TableContent extends React.Component {
  render() {
    return (
      <React.Fragment>
        {this.props.links.map( (link, index) => (
          <TableRow key={index}>
            <TableRowColumn style={customContentStyle}>
              <a href={`${config.api}/${link.shortUrl}`}
                 className="text-info table-link">
                {`${config.api}/${link.shortUrl}`}
              </a>
            </TableRowColumn>
            <TableRowColumn className={this.props.userData ? "media-table-column" : ""}>
              <a href={`${link.originalUrl}`}>
                {link.originalUrl}
              </a>
            </TableRowColumn>
            <TableRowColumn className="media-table-column">
              {link.description}
            </TableRowColumn>
            <TableRowColumn className="media-table-column">
              {new Date(link.postDate).toDateString()}
            </TableRowColumn>
            { this.props.userData ? <TableRowColumn >
              {link.transitions}
            </TableRowColumn> : ""
            }
          </TableRow>
        ))}
      </React.Fragment>
    );
  }
}

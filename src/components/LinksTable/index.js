import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import config from "../../config";

const customContentStyle = {
  width: "auto",
};

export default class LinksTable extends React.Component {
  state = {
    fixedHeader: true,
    showRowHover: true,
    showCheckboxes: false,
    deselectOnClickaway: true,
  };

  render() {
    return (
      <Table
        fixedHeader={this.state.fixedHeader}
      >
        <TableHeader displaySelectAll={this.state.showCheckboxes}
                     adjustForCheckbox={this.state.showCheckboxes}>
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
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
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
        </TableBody>
      </Table>
    );
  }
}

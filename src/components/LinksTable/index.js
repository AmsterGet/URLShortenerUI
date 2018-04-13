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

export default class LinksTable extends React.Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
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
            <TableHeaderColumn tooltip="Original Url">Original Url</TableHeaderColumn>
            <TableHeaderColumn className="media-table-column" tooltip="Description">Description</TableHeaderColumn>
            <TableHeaderColumn className="media-table-column" tooltip="Post date">Post date</TableHeaderColumn>
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
              <TableRowColumn>
                <a href={`${config.api + link.shortUrl}`}
                   className="text-info table-link">
                  {config.api + link.shortUrl}
                </a>
              </TableRowColumn>
              <TableRowColumn>
                <a href={`${link.originalUrl}`}
                   className="text-info table-link">
                  {link.originalUrl}
                </a>
              </TableRowColumn>
              <TableRowColumn className="media-table-column">{link.description}</TableRowColumn>
              <TableRowColumn className="media-table-column">
                {new Date(link.postDate).toDateString()}
              </TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

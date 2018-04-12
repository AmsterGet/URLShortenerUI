import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

export default class LinksTable extends React.Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    showRowHover: true,
    showCheckboxes: false,
    deselectOnClickaway: true,
    height: "300px",
  };

  render() {
    return (
      <Table
        height={this.state.height}
        fixedHeader={this.state.fixedHeader}
      >
        <TableHeader displaySelectAll={this.state.showCheckboxes}
                     adjustForCheckbox={this.state.showCheckboxes}>
          <TableRow>
            <TableHeaderColumn tooltip="Short Url">Short Url</TableHeaderColumn>
            <TableHeaderColumn tooltip="Original Url">Original Url</TableHeaderColumn>
            <TableHeaderColumn tooltip="Description">Description</TableHeaderColumn>
            <TableHeaderColumn tooltip="Post date">Post date</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody
          displayRowCheckbox={this.state.showCheckboxes}
          deselectOnClickaway={this.state.deselectOnClickaway}
          showRowHover={this.state.showRowHover}
          stripedRows={this.state.stripedRows}
        >
          {tableData.map( (row, index) => (
            <TableRow key={index}>
              <TableRowColumn>{index}</TableRowColumn>
              <TableRowColumn>{row.name}</TableRowColumn>
              <TableRowColumn>{row.status}</TableRowColumn>
              <TableRowColumn>{(new Date()).toDateString()}</TableRowColumn>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

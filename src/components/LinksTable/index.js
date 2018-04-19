import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
} from 'material-ui/Table';
import TableHead from "./TableHead";
import TableContent from "./TableContent";

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
        <TableHeader displaySelectAll={this.props.showCheckboxes}
                     adjustForCheckbox={this.props.showCheckboxes}>
          <TableHead userData={this.props.userData}
                     showCheckboxes={this.state.showCheckboxes}/>
        </TableHeader>
        <TableBody displayRowCheckbox={this.props.showCheckboxes}
                   deselectOnClickaway={this.props.deselectOnClickaway}
                   showRowHover={this.props.showRowHover}>
          <TableContent userData={this.props.userData}
                        links={this.props.links}
                        showCheckboxes={this.state.showCheckboxes}
                        showRowHover={this.state.showRowHover}
                        deselectOnClickaway={this.state.deselectOnClickaway}/>
        </TableBody>
      </Table>
    );
  }
}

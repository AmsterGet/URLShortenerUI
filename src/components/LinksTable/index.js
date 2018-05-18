import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
} from 'material-ui/Table';
import LinksTableHeader from "./LinksTableHeader/index";
import LinksTableBody from "./LinksTableBody/index";

export default class LinksTable extends React.Component {
  state = {
    fixedHeader: true,
    showRowHover: true,
    showCheckboxes: false,
    deselectOnClickaway: true,
  };

  render() {
    return (
      <Table fixedHeader={this.state.fixedHeader}>
        <TableHeader displaySelectAll={this.props.showCheckboxes}
                     adjustForCheckbox={this.props.showCheckboxes}>
          <LinksTableHeader userData={this.props.userData}
                            isLinksForInfo={this.props.isLinksForInfo}/>
        </TableHeader>
        <TableBody displayRowCheckbox={this.props.showCheckboxes}
                   deselectOnClickaway={this.props.deselectOnClickaway}
                   showRowHover={this.props.showRowHover}>
        <LinksTableBody userData={this.props.userData}
                        links={this.props.links}
                        editLink={this.props.editLink}
                        getLinkInfo={this.props.getLinkInfo}
                        removeLink={this.props.removeLink}
                        isLinksForInfo={this.props.isLinksForInfo}
                        handleClosePopup={this.props.handleClosePopup}/>
        </TableBody>
      </Table>
    );
  }
}

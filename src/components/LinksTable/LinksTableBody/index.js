import React from "react";
import {
  TableRow,
  TableRowColumn,
} from "material-ui/Table";
import { Link, Redirect } from "react-router-dom";
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import config from "../../../config/index";
import EditLinkPopup from "../../EditLinkPopup";
import "../index.css";

const customContentStyle = {
  width: "auto",
};

const customOptionsStyle = {
  textOverflow: "clip",
};

const temporaryTableRowStyle = {
  display: "none",
};

export default class LinksTableBody extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkForUpdate: false,
    };
  }

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
            <TableRowColumn className={ this.props.userData ? "media-table-column" : "" }>
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
            { this.props.userData ? <React.Fragment>
              <TableRowColumn className="transitions-table-column">
                {link.transitions}
              </TableRowColumn>
              <TableRowColumn className="options-table-column" style={customOptionsStyle}>
                <IconMenu
                  iconButtonElement={ <IconButton><MoreVertIcon/></IconButton> }
                  anchorOrigin={ { horizontal: "right", vertical: "top" } }
                  targetOrigin={ { horizontal: "right", vertical: "top" } }
                  shorturl={link.shortUrl}
                  onItemClick={this.handleMenuClick}
                >
                  <MenuItem primaryText="Remove"/>
                  <MenuItem primaryText="Edit"/>
                  <Link to="../info" onClick={this.infoLinkHandle}>
                    <MenuItem primaryText="Info"/>
                  </Link>
                  <a href={`${config.api}/file/csv/links/${link.shortUrl}`}>
                    <MenuItem primaryText="Download CSV"/>
                  </a>
                </IconMenu>
              </TableRowColumn>
            </React.Fragment> : "" }
          </TableRow>
        ))}
        { this.props.userData && this.props.links ?
          <TableRow style={temporaryTableRowStyle}>
            <TableRowColumn>
              <EditLinkPopup editLinkHandle={this.editLinkHandle}
                             link={this.props.links.filter((link) => {
                               return link.shortUrl===this.state.linkForUpdate
                             })[0] || {}}
              />
            </TableRowColumn>
          </TableRow> : "" }
      </React.Fragment>
    );
  }

  setLinkForUpdate = (url) => {
    this.setState({
      linkForUpdate: url,
    });
  };

  editLinkHandle = (link) => {
    this.setLinkForUpdate(false);
    this.props.editLink(link); // to dispatch into redux
  };

  infoLinkHandle = (event) => {
    const shortUrl = event.currentTarget.parentNode.getAttribute("shorturl");
    this.props.getLinkInfo({ shortUrl });
  };

  handleMenuClick = (event, child) => {
    const shortUrl = event.currentTarget.parentNode.parentNode.getAttribute("shorturl");
    switch (child.props.primaryText) {
      case "Remove":
        this.props.removeLink({ shortUrl });
        break;
      case "Edit":
        this.setLinkForUpdate(shortUrl);
        break;
      default:
        return;
    }
  }
}

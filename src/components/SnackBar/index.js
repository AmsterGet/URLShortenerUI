import React from "react";
import Snackbar from "material-ui/Snackbar";

export default class SnackBar extends React.PureComponent {
  render() {
    return (
      <Snackbar open={this.props.openSnackBar}
                message={this.props.snackMessage}
                autoHideDuration={1500}
                onRequestClose={this.props.handleSnackBarOpen}
      />
    );
  }
}

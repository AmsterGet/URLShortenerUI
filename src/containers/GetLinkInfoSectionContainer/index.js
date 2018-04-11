import { connect } from "react-redux";
import { boundGuestLinkInfo, boundGuestLinksByTagName } from "../../actions/boundActionCreators";
import GetLinkInfoContainer from "../../components/HomePage/GetLinkInfoSection";

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    isError: state.isError,
    errorMessage: state.errorMessage,
    link: state.link,
    links: state.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinkInfo: boundGuestLinkInfo(dispatch),
    getLinksByTagName: boundGuestLinksByTagName(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetLinkInfoContainer);

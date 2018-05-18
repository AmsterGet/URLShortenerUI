import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import LinkInfoSection from "../../components/HomePage/LinkInfoSection";

function mapStateToProps(state) {
  return {
    isLoading: state.guest.isLoading,
    isError: state.guest.isError,
    errorMessage: state.guest.errorMessage,
    links: state.guest.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinkInfo: boundActionCreators.boundGuestLinkInfo(dispatch),
    clearGuestLinks: boundActionCreators.boundClearGuestLinks(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInfoSection);

import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import LinkInfoSection from "../../components/HomePage/LinkInfoSection";

function mapStateToProps(state) {
  return {
    isLoading: state.guest.isLoading,
    isError: state.guest.isError,
    errorMessage: state.guest.errorMessage,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getLinkInfo: boundActionCreators.boundGuestLinkInfo(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInfoSection);

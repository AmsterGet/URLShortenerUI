import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import LinkInfoContainer from "../../components/HomePage/LinkInfoSection";

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
    getLinkInfo: boundActionCreators.boundGuestLinkInfo(dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkInfoContainer);

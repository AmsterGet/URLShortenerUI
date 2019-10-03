import { connect } from "react-redux";
import boundActionCreators from "../../actions/boundActionCreators/";
import LinkInfoSection from "../../components/HomePage/LinkInfoSection";

const guestSelector = (state) => state.guest || {};

function mapStateToProps(state) {
  return {
    ...guestSelector(state),
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

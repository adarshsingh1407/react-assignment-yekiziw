import { connect } from "react-redux";
import JournalistDetail from "../../../components/Journalist/JournalistDetail";
import { fetchJournalistDetail } from "./actions";

const mapStateToProps = ({ journalistDetail }) => ({ journalistDetail });

const mapDispatchToProps = (dispatch) => ({
  fetchJournalistDetail: (id) => dispatch(fetchJournalistDetail(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JournalistDetail);

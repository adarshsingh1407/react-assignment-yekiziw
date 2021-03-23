import { connect } from "react-redux";
import JournalistList from "../../../components/Journalist/JournalistList";
import {
  fetchJournalistList,
  filterJournalistList,
  sortJournalistList,
} from "./actions";

const mapStateToProps = ({ journalistList }) => ({ journalistList });

const mapDispatchToProps = (dispatch) => ({
  fetchJournalistList: () => dispatch(fetchJournalistList()),
  filterJournalistList: (filter) => dispatch(filterJournalistList(filter)),
  sortJournalistList: (sortBy) => dispatch(sortJournalistList(sortBy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(JournalistList);

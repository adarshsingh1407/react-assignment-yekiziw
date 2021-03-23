import { combineReducers } from "redux";
import journalistDetail from "../../containers/Journalist/JournalistDetail/reducer";
import journalistList from "../../containers/Journalist/JournalistList/reducer";

export default combineReducers({ journalistDetail, journalistList });

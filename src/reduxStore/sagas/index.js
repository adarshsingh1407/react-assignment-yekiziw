import { all } from "redux-saga/effects";
import { loadJournalistList } from "../../containers/Journalist/JournalistList/sagas";
import { loadJournalistDetail } from "../../containers/Journalist/JournalistDetail/sagas";

export default function* rootSaga() {
  yield all([loadJournalistList(), loadJournalistDetail()]);
}

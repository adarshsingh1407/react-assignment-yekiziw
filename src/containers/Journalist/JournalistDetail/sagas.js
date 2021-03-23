import { call, put, takeLatest } from "redux-saga/effects";
import journalistService from "../../../services/journalistService";
import {
  fetchJournalistDetailSuccess,
  fetchJournalistDetailError,
} from "./actions";
import { FETCH_JOURNALIST_DETAIL } from "./constants";

export function* fetchJournalistDetail() {
  try {
    const response = yield call(journalistService.getJournalistList);
    yield put(fetchJournalistDetailSuccess(response.data));
  } catch (e) {
    console.error("Error in fetchJournalistDetail", e);
    yield put(
      fetchJournalistDetailError(["Could not fetch journalist detail."])
    );
  }
}

export function* loadJournalistDetail() {
  yield takeLatest(FETCH_JOURNALIST_DETAIL, fetchJournalistDetail);
}

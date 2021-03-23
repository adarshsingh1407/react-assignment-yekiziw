import { call, put, takeLatest, select } from "redux-saga/effects";
import journalistService from "../../../services/__mocks__/journalistService.mock";
import {
  fetchJournalistListError,
  fetchJournalistListSuccess,
  updateFilteredJournalistList,
} from "./actions";
import { FETCH_JOURNALIST_LIST } from "./constants";
import { filterJournalists, sortJournalists } from "./utils";

export function* fetchJournalistList({ id }) {
  try {
    const state = yield select();
    const {
      journalistList: { filters, sortBy },
    } = state;
    const response = yield call(journalistService.getJournalistListSuccess, id);
    const journalists = response.data;
    const filteredJournalists = filterJournalists(journalists, filters);
    sortJournalists(filteredJournalists, sortBy);
    yield put(fetchJournalistListSuccess(journalists));
    yield put(updateFilteredJournalistList(filteredJournalists));
  } catch (e) {
    console.error("Error in fetchJournalistList", e);
    yield put(fetchJournalistListError(["Could not fetch journalist list."]));
  }
}

export function* loadJournalistList() {
  yield takeLatest(FETCH_JOURNALIST_LIST, fetchJournalistList);
}

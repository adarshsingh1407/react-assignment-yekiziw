import {
  FETCH_JOURNALIST_DETAIL,
  FETCH_JOURNALIST_DETAIL_ERROR,
  FETCH_JOURNALIST_DETAIL_SUCCESS,
} from "./constants";

export const fetchJournalistDetail = (id) => ({
  type: FETCH_JOURNALIST_DETAIL,
  id,
});

export const fetchJournalistDetailSuccess = (journalist) => ({
  type: FETCH_JOURNALIST_DETAIL_SUCCESS,
  journalist,
});

export const fetchJournalistDetailError = (errors) => ({
  type: FETCH_JOURNALIST_DETAIL_ERROR,
  errors,
});

import {
  FETCH_JOURNALIST_LIST,
  FETCH_JOURNALIST_LIST_ERROR,
  FETCH_JOURNALIST_LIST_SUCCESS,
  FILTER_JOURNALIST_LIST,
  SORT_JOURNALIST_LIST,
  UPDATE_FILTERED_JOURNALIST_LIST,
} from "./constants";

export const fetchJournalistList = () => ({
  type: FETCH_JOURNALIST_LIST,
});

export const fetchJournalistListSuccess = (journalists) => ({
  type: FETCH_JOURNALIST_LIST_SUCCESS,
  journalists,
});

export const fetchJournalistListError = (errors) => ({
  type: FETCH_JOURNALIST_LIST_ERROR,
  errors,
});

export const filterJournalistList = (filters) => ({
  type: FILTER_JOURNALIST_LIST,
  filters,
});

export const sortJournalistList = (sortBy) => ({
  type: SORT_JOURNALIST_LIST,
  sortBy,
});

export const updateFilteredJournalistList = (journalists = []) => ({
  type: UPDATE_FILTERED_JOURNALIST_LIST,
  journalists,
});

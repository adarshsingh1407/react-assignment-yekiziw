import {
  FETCH_JOURNALIST_LIST,
  FETCH_JOURNALIST_LIST_ERROR,
  FETCH_JOURNALIST_LIST_SUCCESS,
  FILTER_IS_VERIFIED_OPTIONS,
  FILTER_JOURNALIST_LIST,
  SORT_JOURNALIST_LIST,
  SORT_BY_OPTIONS,
  UPDATE_FILTERED_JOURNALIST_LIST,
} from "./constants";

const DEFAULT_FILTERS = {
  name: "",
  isVerified: FILTER_IS_VERIFIED_OPTIONS[0],
  publications: [],
  locations: [],
  interests: [],
};

const DEFAULT_SORT_BY = SORT_BY_OPTIONS[0];

const DEFAULT_STATE = {
  isLoading: false,
  journalists: [],
  filteredJournalists: [],
  errors: [],
  filters: { ...DEFAULT_FILTERS },
  sortBy: DEFAULT_SORT_BY,
};

const journalistDetailReducer = (state = { ...DEFAULT_STATE }, action = {}) => {
  switch (action.type) {
    case FETCH_JOURNALIST_LIST: {
      return {
        ...state,
        isLoading: true,
        journalist: [],
        filteredJournalists: [],
        filters: { ...DEFAULT_FILTERS },
        sortBy: DEFAULT_SORT_BY,
      };
    }
    case FETCH_JOURNALIST_LIST_SUCCESS: {
      const { journalists = [] } = action;
      return { ...state, isLoading: false, journalists };
    }
    case FETCH_JOURNALIST_LIST_ERROR: {
      const { errors = [] } = action;
      return { ...state, isLoading: false, errors };
    }
    case FILTER_JOURNALIST_LIST: {
      const { filters = {} } = action;
      return { ...state, filters };
    }
    case SORT_JOURNALIST_LIST: {
      const { sortBy = {} } = action;
      return { ...state, sortBy };
    }
    case UPDATE_FILTERED_JOURNALIST_LIST: {
      const { journalists = [] } = action;
      return { ...state, filteredJournalists: journalists };
    }
    default:
      return state;
  }
};

export default journalistDetailReducer;

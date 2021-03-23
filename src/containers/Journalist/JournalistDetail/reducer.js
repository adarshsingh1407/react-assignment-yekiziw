import {
  FETCH_JOURNALIST_DETAIL,
  FETCH_JOURNALIST_DETAIL_ERROR,
  FETCH_JOURNALIST_DETAIL_SUCCESS,
} from "./constants";

const DEFAULT_STATE = {
  isLoading: false,
  journalist: {},
  errors: [],
};

const journalistDetailReducer = (state = { ...DEFAULT_STATE }, action = {}) => {
  switch (action.type) {
    case FETCH_JOURNALIST_DETAIL: {
      return { ...state, isLoading: true, journalist: {} };
    }
    case FETCH_JOURNALIST_DETAIL_SUCCESS: {
      const { journalist = {} } = action;
      return { ...state, isLoading: false, journalist };
    }
    case FETCH_JOURNALIST_DETAIL_ERROR: {
      const { errors = [] } = action;
      return { ...state, isLoading: false, errors };
    }
    default:
      return state;
  }
};

export default journalistDetailReducer;

import { searchTypes } from "./search.types";

const INITAL_STATE = {
  searchResult: [],
  error: null,
  loading: false,
};

const searchReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case searchTypes.SEARCH_START:
      return {
        ...state,
        loading: true,
      };
    case searchTypes.SEARCH_SUCCESS:
      return {
        ...state,
        searchResult: action.payload,
        loading: false,
      };
    case searchTypes.SEARCH_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default searchReducer;

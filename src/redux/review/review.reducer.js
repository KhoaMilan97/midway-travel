import { reviewTypes } from "./review.type";

const INITIAL_STATE = {
  error: "",
  reviews: [],
};

const reviewReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case reviewTypes.ADD_REVIEW_FAILURE:
    case reviewTypes.GET_REVIEW_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case reviewTypes.ADD_REVIEW_SUCCESS:
      return {
        ...state,
        error: null,
        reviews: [{ ...action.payload }, ...state.reviews],
      };
    case reviewTypes.GET_REVIEW_SUCCESS:
      return {
        ...state,
        error: null,
        reviews: action.payload,
      };
    default:
      return state;
  }
};

export default reviewReducer;

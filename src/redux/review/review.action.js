import { reviewTypes } from "./review.type";

export const addReviewStart = (review) => ({
  type: reviewTypes.ADD_REVIEW_START,
  payload: review,
});

export const addReviewSuccess = (reviewToAdd) => ({
  type: reviewTypes.ADD_REVIEW_SUCCESS,
  payload: reviewToAdd,
});

export const addReviewFailure = (err) => ({
  type: reviewTypes.ADD_REVIEW_FAILURE,
  payload: err.message,
});

export const getReviewStart = () => ({
  type: reviewTypes.GET_REVIEW_START,
});

export const getReviewSuccess = (review) => ({
  type: reviewTypes.GET_REVIEW_SUCCESS,
  payload: review,
});

export const getReviewFailure = (err) => ({
  type: reviewTypes.GET_REVIEW_SUCCESS,
  payload: err.message,
});

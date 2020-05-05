import { createSelector } from "reselect";

const selectReviews = (state) => state.review;

export const selectAllReviews = createSelector(
  [selectReviews],
  (review) => review.reviews
);

export const getReviewsWithTours = (state, props) =>
  state.review.reviews.filter((review) => review.id_tour === parseInt(props));

export const selectReviewsWithTours = createSelector(
  [getReviewsWithTours],
  (review) => review
);

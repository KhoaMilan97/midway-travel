import { all, takeLatest, put, call } from "redux-saga/effects";

import API from "../../api/baseURL";

import { reviewTypes } from "./review.type";
import {
  addReviewFailure,
  addReviewSuccess,
  getReviewSuccess,
  getReviewFailure,
} from "./review.action";

// Add Review
export function* addReview({
  payload: { id_tour, username, comment, point, date },
}) {
  try {
    yield API.post("review", {
      id_tour,
      username,
      comment,
      point,
      date,
    });
    yield put(addReviewSuccess({ id_tour, username, comment, point, date }));
  } catch (err) {
    yield put(addReviewFailure(err));
  }
}

export function* onAddReview() {
  yield takeLatest(reviewTypes.ADD_REVIEW_START, addReview);
}

// Get Review
export function* getReview() {
  try {
    const allReviews = yield API.get("allReview");
    yield put(getReviewSuccess(allReviews.data));
  } catch (err) {
    yield put(getReviewFailure(err));
  }
}

export function* onGetReview() {
  yield takeLatest(reviewTypes.GET_REVIEW_START, getReview);
}

export function* reviewSaga() {
  yield all([call(onAddReview), call(onGetReview)]);
}

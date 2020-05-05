import { takeLatest, put, call, all } from "redux-saga/effects";
import API from "../../api/baseURL";

import tourTypes from "./tours.type";
import { getTourSuccess, getTourFailure } from "./tour.action";

export function* getTours() {
  try {
    const tours = yield API.get(`tour`);
    yield put(getTourSuccess(tours.data));
  } catch (error) {
    yield put(getTourFailure(error.message));
  }
}

export function* onGetTourStart() {
  yield takeLatest(tourTypes.GET_TOURS_START, getTours);
}

export function* tourSagas() {
  yield all([call(onGetTourStart)]);
}

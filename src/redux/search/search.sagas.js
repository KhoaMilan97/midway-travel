import { all, call, takeLatest, put } from "redux-saga/effects";
import API from "../../api/baseURL";

import { searchTypes } from "./search.types";
import { searchFailure, searchSuccess } from "./search.action";

export function* searchTours({
  payload: { date, departure, destination, price },
}) {
  try {
    const result = yield API.get(
      `search?departure=${departure}&destination=${destination}&date_of_departure=${date}&tour_price=${price}`
    );
    const tourSearch = result.data;
    yield put(searchSuccess(tourSearch));
  } catch (error) {
    yield put(searchFailure(error.message));
  }
}

export function* onSearchTours() {
  yield takeLatest(searchTypes.SEARCH_START, searchTours);
}

export function* searchSagas() {
  yield all([call(onSearchTours)]);
}

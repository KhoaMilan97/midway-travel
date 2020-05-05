import { call, all, put, takeLatest } from "redux-saga/effects";

import { cartTypes } from "./cart.types";
import { bookToursSuccess, bookToursFailure } from "./cart.action";

import API from "../../api/baseURL";

export function* bookToursStart({ payload }) {
  try {
    const {
      displayName,
      email,
      phoneNumber,
      id,
      date,
      time,
      adult,
      children,
      totalPrice,
    } = payload;

    yield API.post(`bookTour`, {
      id_tour: id,
      adult: adult,
      children: children,
      total_price: totalPrice,
      fullname: displayName,
      email: email,
      mobile: phoneNumber,
      date: date,
      time: time,
    });
    yield put(bookToursSuccess());
  } catch (err) {
    yield put(bookToursFailure(err.message));
  }
}

export function* onBookToursStart() {
  yield takeLatest(cartTypes.BOOK_TOUR_START, bookToursStart);
}

export function* cartSagas() {
  yield all([call(onBookToursStart)]);
}

import { takeLatest, call, put, all } from "redux-saga/effects";
import API from "../../api/baseURL";

import { getTypeSuccess, getTypeFailure } from "./type-tour.action";
import { typeTypeTours } from "./type_tour.type";

export function* getTypeStart() {
  try {
    const types = yield API.get("type-tour");
    yield put(getTypeSuccess(types.data));
  } catch (err) {
    yield put(getTypeFailure(err));
  }
}

export function* onGetTypeStart() {
  yield takeLatest(typeTypeTours.GET_TYPE_START, getTypeStart);
}

export function* typeSagas() {
  yield all([call(onGetTypeStart)]);
}

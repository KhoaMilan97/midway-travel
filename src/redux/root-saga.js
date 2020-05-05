import { call, all } from "redux-saga/effects";

import { userSaga } from "./user/user.sagas";
import { tourSagas } from "./tour/tour.sagas";
import { typeSagas } from "./type-tour/type_tour.saga";
import { cartSagas } from "./cart/cart.sagas";
import { reviewSaga } from "./review/revew.sagas";
import { searchSagas } from "./search/search.sagas";

export function* rootSaga() {
  yield all([
    call(userSaga),
    call(tourSagas),
    call(typeSagas),
    call(cartSagas),
    call(reviewSaga),
    call(searchSagas),
  ]);
}

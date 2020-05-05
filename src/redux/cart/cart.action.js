import { cartTypes } from "./cart.types";

export const addCartItems = cartItems => ({
  type: cartTypes.ADD_ITEM_CART,
  payload: cartItems
});

export const bookToursStart = tours => ({
  type: cartTypes.BOOK_TOUR_START,
  payload: tours
});

export const bookToursSuccess = () => ({
  type: cartTypes.BOOK_TOUR_SUCCESS
});

export const bookToursFailure = error => ({
  type: cartTypes.BOOK_TOUR_FAILURE,
  payload: error
});

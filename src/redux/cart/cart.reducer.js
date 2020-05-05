import { cartTypes } from "./cart.types";

const INITIAL_STATE = {
  cartItems: [],
  error: "",
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartTypes.ADD_ITEM_CART:
      return {
        ...state,
        cartItems: action.payload,
      };
    case cartTypes.BOOK_TOUR_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case cartTypes.BOOK_TOUR_SUCCESS:
      return {
        ...state,
        error: null,
      };

    default:
      return state;
  }
};

export default cartReducer;

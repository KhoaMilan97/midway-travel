import { typeTypeTours } from "./type_tour.type";

const INITIAL_STATE = {
  type: [],
  error: ""
};

const typeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case typeTypeTours.GET_TYPE_SUCCESS:
      return {
        ...state,
        type: action.payload,
        error: ""
      };
    case typeTypeTours.GET_TYPE_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default typeReducer;

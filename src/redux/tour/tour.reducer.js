import tourTypes from "./tours.type";

const INITIAL_STATE = {
  tours: [],
  erros: null,
  loading: true
};

const tourReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case tourTypes.GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        erros: null,
        loading: false
      };
    case tourTypes.GET_TOURS_FAILURE:
      return {
        ...state,
        erros: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default tourReducer;

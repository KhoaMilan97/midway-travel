import tourTypes from "./tours.type";

export const getTourStart = () => ({
  type: tourTypes.GET_TOURS_START
});

export const getTourSuccess = tours => ({
  type: tourTypes.GET_TOURS_SUCCESS,
  payload: tours
});

export const getTourFailure = error => ({
  type: tourTypes.GET_TOURS_FAILURE,
  payload: error
});

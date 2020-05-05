import { typeTypeTours } from "./type_tour.type";

export const getTypeStart = () => ({
  type: typeTypeTours.GET_TYPE_START
});

export const getTypeSuccess = type => ({
  type: typeTypeTours.GET_TYPE_SUCCESS,
  payload: type
});

export const getTypeFailure = err => ({
  type: typeTypeTours.GET_TYPE_FAILURE,
  payload: err
});

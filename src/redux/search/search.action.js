import { searchTypes } from "./search.types";

export const searchTourStart = (searchValue) => ({
  type: searchTypes.SEARCH_START,
  payload: searchValue,
});

export const searchSuccess = (searchResult) => ({
  type: searchTypes.SEARCH_SUCCESS,
  payload: searchResult,
});

export const searchFailure = (error) => ({
  type: searchTypes.SEARCH_FAILURE,
  payload: error,
});

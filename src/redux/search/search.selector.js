import { createSelector } from "reselect";

export const selectSearchTours = (state) => state.search;

export const selectSearchResult = createSelector(
  [selectSearchTours],
  (search) => search.searchResult
);

export const selectSearchLoading = createSelector(
  [selectSearchTours],
  (search) => search.loading
);

export const selectSearchTour = createSelector([selectSearchResult], (tour) =>
  Object.keys(tour).map((item) => tour[item])
);

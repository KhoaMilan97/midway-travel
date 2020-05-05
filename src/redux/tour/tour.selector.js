import { createSelector } from "reselect";

const selectTour = (state) => state.tour;

export const selectAllTours = createSelector([selectTour], (tour) =>
  tour.tours.filter((item) => item.status2 === 1)
);

export const selectHotTours = createSelector([selectAllTours], (tours) =>
  tours.filter((tour) => tour.hot === 1)
);

export const selectPopularTours = createSelector([selectAllTours], (tours) =>
  tours.sort((a, b) => b.paid - a.paid)
);

export const selectTourLoading = createSelector(
  [selectTour],
  (tour) => tour.loading
);

export const getUrlParams = (state, props) =>
  state.tour.tours.find((tour) => tour.id_tour === parseInt(props));

export const selectTourDetails = createSelector(
  [getUrlParams],
  (toursDetails) => toursDetails
);

export const getTypeTours = (state, props) =>
  state.tour.tours.filter((tour) => tour.id_type_tour === parseInt(props));

export const selectTourWithType = createSelector(
  [getTypeTours],
  (toursWithTypes) => toursWithTypes.filter((item) => item.status2 === 1)
);

export const selectTourSale = createSelector([selectAllTours], (tours) =>
  tours
    .filter((tour) => tour.promotion_price > 0)
    .sort((a, b) => b.promotion_price - a.promotion_price)
);

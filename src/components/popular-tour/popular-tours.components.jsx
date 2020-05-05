import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TourSlider from "../tour-slider/tour-slider.componnets";

import { selectPopularTours } from "../../redux/tour/tour.selector";

const PopularTours = ({ popularTours }) => (
  <React.Fragment>
    {popularTours.length && (
      <TourSlider tours={popularTours} status="Phổ biến" />
    )}
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  popularTours: selectPopularTours,
});

export default connect(mapStateToProps)(PopularTours);

import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import TourSlider from "../tour-slider/tour-slider.componnets";

import { selectTourSale } from "../../redux/tour/tour.selector";

const TourSale = ({ tours }) => (
  <React.Fragment>
    {tours.length && <TourSlider tours={tours} status="Giảm giá" />}
  </React.Fragment>
);

const mapStateToProps = createStructuredSelector({
  tours: selectTourSale,
});

export default connect(mapStateToProps)(TourSale);

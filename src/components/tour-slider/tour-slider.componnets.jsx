import React from "react";
import OwlCarousel from "react-owl-carousel";

import TourSliderItems from "../tour-slider-items/tour-slider-items.components";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const setting = {
  center: false,
  items: 2,
  loop: false,

  margin: 0,
  dots: false,
  nav: true,
  navText: [
    "<i class='arrow_carrot-left'></i>",
    "<i class='arrow_carrot-right'></i>",
  ],
  responsive: {
    0: {
      nav: false,
      dots: true,
      items: 1,
    },
    768: {
      nav: false,
      dots: true,
      items: 2,
    },
    1024: {
      items: 3,
    },
  },
};

const TourSlider = ({ tours, status }) => {
  return (
    <OwlCarousel
      {...setting}
      className="owl-carousel owl-theme list_carousel add_bottom_30"
    >
      {tours
        .map((tour, index) => (
          <TourSliderItems key={tour.id_tour} status={status} {...tour} />
        ))
        .slice(0, 5)}
      {/* /carousel */}
    </OwlCarousel>
  );
};

export default TourSlider;

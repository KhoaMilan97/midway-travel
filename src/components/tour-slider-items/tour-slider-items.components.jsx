import React from "react";
import { Link } from "react-router-dom";

import { linkImage } from "../../util/linkImage";

import useRating from "../../util/useRating";

const TourSliderItems = ({
  status,
  id_tour,
  image,
  tour_price,
  tour_name,
  promotion_price,
}) => {
  const priceSales = tour_price - tour_price * promotion_price;
  let priceSalesVND = priceSales.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  let tourPriceVND = tour_price.toLocaleString("it-IT", {
    style: "currency",
    currency: "VND",
  });
  return (
    <div className="item">
      <div className="tour_container">
        <div className="ribbon_3 popular">
          <span>{status}</span>
        </div>
        <div className="img_container">
          <Link to={`/tours/${id_tour}`}>
            <img
              src={`${linkImage}/${image}`}
              width={800}
              height={533}
              className="img-fluid"
              alt="tour"
            />

            {promotion_price > 0 ? (
              <div className="badge_save">
                Giảm<strong>{promotion_price * 100}%</strong>
              </div>
            ) : null}
            {/* <div className="score">
              <span>{priceSales}</span>
            </div> */}
            <div className="short_info">
              {promotion_price > 0 ? (
                <span style={{ textDecoration: "line-through" }}>
                  {tourPriceVND}
                </span>
              ) : null}
              <span className="price" style={{ fontSize: "18px" }}>
                {promotion_price > 0 ? priceSalesVND : tourPriceVND}
              </span>
            </div>
          </Link>
        </div>
        <div className="tour_title">
          <h3>
            <strong>{tour_name}</strong>
          </h3>
          <div className="rating">{useRating(id_tour)}</div>
        </div>
      </div>
      {/* End box */}
    </div>
  );
};

export default TourSliderItems;

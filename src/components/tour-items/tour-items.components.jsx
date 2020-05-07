import React from "react";
import { Link, withRouter } from "react-router-dom";

import useRating from "../../util/useRating";
import { linkImage } from "../../util/linkImage";

import "./tour-items.styles.scss";

const TourItems = ({
  tour_name,
  tour_price,
  tour_duration,
  departure,
  hot,
  id_tour,
  date_of_departure,
  image,
  destination,
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
    <div className="strip_all_tour_list wow fadeIn" data-wow-delay="0.1s">
      <div className="row">
        <div className="col-lg-4 col-md-4">
          <div className="ribbon_3 popular">
            <span>{hot === 1 ? "Hot" : "Popular"}</span>
          </div>
          <div className="img_list">
            <Link to={`/tours/${id_tour}`}>
              <img src={`${linkImage}/${image}`} alt="tours" />
              <div className="short_info">
                <i className="icon_set_1_icon-4" />
                Museums{" "}
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="tour_list_desc">
            <div className="rating">{useRating(id_tour)}</div>
            <h3>
              <strong>{tour_name}</strong>
            </h3>
            <div style={{ marginLeft: 0 }}>
              <ul style={{ listStyle: "none", marginLeft: 0, paddingLeft: 0 }}>
                <li>
                  <strong>Thời gian: </strong>
                  {tour_duration}
                </li>
                <li>
                  <strong>Khởi hành từ: </strong>
                  {departure}
                </li>
                <li>
                  <strong>Điểm đến: </strong>
                  {destination}
                </li>
                <li>
                  <strong>Ngày khởi hành: </strong>
                  {date_of_departure}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-2">
          <div className="price_list">
            <div>
              <sup>{promotion_price > 0 ? priceSalesVND : tourPriceVND}</sup>
              {promotion_price > 0 ? (
                <span className="normal_price_list">{tourPriceVND}</span>
              ) : null}

              <small>*Trên người</small>
              <p>
                <Link to={`/tours/${id_tour}`} className="btn_1">
                  Chi tiết
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(TourItems);

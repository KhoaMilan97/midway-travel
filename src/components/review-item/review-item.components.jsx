import React from "react";

import moment from "moment";
import "moment/locale/vi"; // without this line it didn't work
moment.locale("vi");

const ReviewItem = ({ username, comment, date, point }) => {
  const renderRating = (num) => {
    let className = [
      { class: "icon-smile" },
      { class: "icon-smile" },
      { class: "icon-smile" },
      { class: "icon-smile" },
      { class: "icon-smile" },
    ];
    for (let x = 0; x < num; x++) {
      className[x].class = "icon-smile voted";
    }

    return className.map((item, index) => (
      <i className={item.class} key={index} />
    ));
  };
  return (
    <div className="review_strip_single">
      <small> - {date ? moment(date).fromNow() : null} -</small>
      <h4 style={{ marginLeft: 0 }}>{username}</h4>
      <p>{`"${comment}"`}</p>
      <div className="rating">{renderRating(point)}</div>
    </div>
  );
};

export default ReviewItem;

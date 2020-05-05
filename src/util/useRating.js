import React, { useEffect, useState } from "react";

import API from "../api/baseURL";

const useRating = (id_tour) => {
  const [reviewState, setReviewState] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await API.get(`review/${id_tour}`);
        const data = response.data;
        setReviewState(data);
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [id_tour]);

  if (reviewState) {
    const average = reviewState.reduce((accumulator, item) => {
      return accumulator + item.point;
    }, 0);

    if (average > 0) {
      const point = average / reviewState.length;
      let className = [
        { class: "icon-smile" },
        { class: "icon-smile" },
        { class: "icon-smile" },
        { class: "icon-smile" },
        { class: "icon-smile" },
      ];
      for (let x = 0; x < point; x++) {
        className[x].class = "icon-smile voted";
      }

      return className.map((item, index) => (
        <i className={item.class} key={index} />
      ));
    } else {
      return null;
    }
  }

  return reviewState;
};

export default useRating;

import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";
import Pagination from "react-js-pagination";

import { selectAllTours } from "../../redux/tour/tour.selector";
import { selectAllType } from "../../redux/type-tour/type-tour.selector";

import BannerHeader from "../../shared/banner-header.components";
import TourItems from "../../components/tour-items/tour-items.components";

const AllTours = ({ title, tours, typeTours }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [toursPerPages] = useState(5);

  useEffect(() => {
    document.title = title;
  }, [title]);

  const handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  // Get Current Tours
  const indexOfLastTours = currentPage * toursPerPages; // 1 * 5 = 5 //
  const indexOfFirstTours = indexOfLastTours - toursPerPages; // 5 - 5 = 0 //
  const currentTours = tours.slice(indexOfFirstTours, indexOfLastTours); // (0,5)

  return (
    <React.Fragment>
      <BannerHeader
        title="Tất cả tours"
        content="Việt Nam nguyên chất 100% - Cảm nhận điều khác biệt"
      />
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>Tours</li>
            </ul>
          </div>
        </div>

        <div className="container margin_60">
          <div className="row">
            <aside className="col-lg-3">
              <div className="box_style_cat">
                <ul id="cat_nav">
                  <li>
                    <Link to="/tours">
                      <i className="icon_set_1_icon-51" />
                      Tất cả tour
                    </Link>
                  </li>
                  {typeTours.map((item) => (
                    <li key={item.id}>
                      <Link to={`/tours/${item.type_link}/${item.id}`}>
                        <i className="icon_set_1_icon-51" />
                        {item.name_type}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            {/*End aside */}
            <div className="col-lg-9">
              {currentTours.map((tour) => (
                <TourItems key={tour.id_tour} {...tour} />
              ))}

              <hr />
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={toursPerPages}
                totalItemsCount={tours.length}
                pageRangeDisplayed={toursPerPages}
                itemClass="page-item"
                linkClass="page-link"
                onChange={handlePageChange}
                innerClass="pagination justify-content-center"
              />
              {/* end pagination*/}
            </div>
            {/* End col lg-9 */}
          </div>
          {/* End row */}
        </div>
        {/* End container */}
      </main>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  tours: selectAllTours,
  typeTours: selectAllType,
});

export default connect(mapStateToProps)(AllTours);

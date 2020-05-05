import React from "react";
import { connect } from "react-redux";
import { Link, withRouter, Redirect } from "react-router-dom";
import Pagination from "react-js-pagination";

import BannerHeader from "../../shared/banner-header.components";
import TourItems from "../../components/tour-items/tour-items.components";

import { selectAllType } from "../../redux/type-tour/type-tour.selector";
import { selectTourWithType } from "../../redux/tour/tour.selector";

class TypeTours extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      toursPerPages: 5,
    };
  }

  componentDidMount() {
    const { typeTours, match } = this.props;
    document.title = `Midway - ${
      typeTours[parseInt(match.params.id) - 1].name_type
    }`;
  }

  handlePageChange(pageNumber) {
    this.setState({ currentPage: pageNumber });
    window.scrollTo(0, 0);
  }

  render() {
    const { typeTours, match, toursWithType } = this.props;
    const { currentPage, toursPerPages } = this.state;
    // Get Current Tours
    const indexOfLastTours = currentPage * toursPerPages; // 1 * 5 = 5 //
    const indexOfFirstTours = indexOfLastTours - toursPerPages; // 5 - 5 = 0 //
    const currentTours = toursWithType.slice(
      indexOfFirstTours,
      indexOfLastTours
    ); // (0,5)

    if (toursWithType.length === 0) return <Redirect to="/tours" />;

    return (
      <React.Fragment>
        <BannerHeader
          title={typeTours[parseInt(match.params.id) - 1].name_type}
          content="Việt Nam nguyên chất 100% - Cảm nhận điều khác biệt"
        />
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>
                  <Link to="/tours">Tour</Link>
                </li>
                <li>{match.params.type}</li>
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
                        <Link
                          to={`/tours/${item.type_link}/${item.id}`}
                          onClick={() => this.setState({ currentPage: 1 })}
                        >
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
                  totalItemsCount={toursWithType.length}
                  pageRangeDisplayed={toursPerPages}
                  itemClass="page-item"
                  linkClass="page-link"
                  onChange={this.handlePageChange.bind(this)}
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
  }
}

const mapStateToProps = (state, ownProps) => ({
  typeTours: selectAllType(state),
  toursWithType: selectTourWithType(state, ownProps.match.params.id),
});

export default withRouter(connect(mapStateToProps)(TypeTours));

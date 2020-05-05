import React, { useState } from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { searchTourStart } from "../../redux/search/search.action";

import { dataDestination } from "../search/data-search";

import "react-datepicker/dist/react-datepicker.css";
// import "../search/search.styles.scss";

const SearchBoxV2 = ({ searchTourStart, history }) => {
  let getSearch = localStorage.getItem("search");
  let datelocal;
  let dataSearch;
  if (getSearch) {
    dataSearch = JSON.parse(getSearch);
    datelocal = dataSearch.date ? new Date(dataSearch.date) : null;
  } else {
    dataSearch = {
      departure: null,
      destination: null,
      price: null,
    };
    datelocal = null;
  }

  const [searchState, setSearchState] = useState({
    departure: dataSearch.departure,
    destination: dataSearch.destination,
    date: datelocal,
    price: dataSearch.price,
  });

  const { departure, destination, date, price } = searchState;

  const optionsDeparture = [
    { value: "Hà Nội", label: "Hà Nội" },
    { value: "Hồ Chí Minh", label: "Hồ Chí Minh" },
  ];

  const optionsDestination = dataDestination.map((item) => {
    return { value: item.value, label: item.display };
  });

  const optionsPrice = [
    { value: "1", label: "Dưới 2tr" },
    { value: "2", label: "Từ 2tr - 3tr" },
    { value: "3", label: "Từ 3tr - 5tr" },
    { value: "4", label: "Từ 5tr - 10tr" },
    { value: "5", label: "Từ 10tr - 20tr" },
    { value: "6", label: "Từ 20tr - 50tr" },
    { value: "7", label: "Trên 50tr" },
  ];

  const handleSelectChange = (name) => (value) => {
    setSearchState({ ...searchState, [name]: value });
  };

  const onDateChange = (date) => setSearchState({ ...searchState, date });

  const handleSearch = () => {
    if (
      departure != null ||
      destination != null ||
      date != null ||
      price != null
    ) {
      /* Convert date to mysql date can accpet */
      function formatDate(date1) {
        if (date1 != null) {
          return (
            date1.getFullYear() +
            "-" +
            (date1.getMonth() < 9 ? "0" : "") +
            (date1.getMonth() + 1) +
            "-" +
            (date1.getDate() < 10 ? "0" : "") +
            date1.getDate()
          );
        }
        return "";
      }
      let departureValue = departure === null ? "" : departure.value;
      let destinationValue = destination === null ? "" : destination.value;
      let priceValue = price === null ? "" : price.value;

      let searchSession = {
        departure: departure,
        destination: destination,
        price: price,
        date: date,
      };

      localStorage.setItem("search", JSON.stringify(searchSession));

      searchTourStart({
        departure: departureValue,
        destination: destinationValue,
        date: formatDate(date),
        price: priceValue,
      });
      history.push("/search-result");
    }
  };

  return (
    <div id="search_container_2">
      <div id="search_2">
        <div className="tab-content">
          <div className="tab-pane fade active show" id="tours">
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-3">
                  <div className="form-group">
                    <label>Nơi khởi hành</label>
                    <div className="box">
                      <Select
                        name="departure"
                        value={departure}
                        onChange={handleSelectChange("departure")}
                        options={optionsDeparture}
                        isClearable="true"
                        placeholder="Chọn nơi khởi hành..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="form-group">
                    <input
                      className="form-control date-pick"
                      type="text"
                      name="dates"
                      placeholder="When.."
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-3">
                  <div className="panel-dropdown">
                    <a href="#">
                      Guests <span className="qtyTotal tours">1</span>
                    </a>
                    <div className="panel-dropdown-content">
                      {/* Quantity Buttons */}
                      <div className="qtyButtons tours">
                        <label>Adults</label>
                        <input
                          type="text"
                          name="qtyInput_tours"
                          defaultValue={1}
                        />
                      </div>
                      <div className="qtyButtons tours">
                        <label>Childrens</label>
                        <input
                          type="text"
                          name="qtyInput_tours"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
              {/* /row */}
            </form>
          </div>
          {/* End tab */}
          <div className="tab-pane fade" id="hotels">
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-4">
                  <div className="form-group">
                    <label>Nơi khởi hành</label>
                    <div className="box">
                      <Select
                        name="departure"
                        value={departure}
                        onChange={handleSelectChange("departure")}
                        options={optionsDeparture}
                        isClearable="true"
                        placeholder="Chọn nơi khởi hành..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input
                      className="form-control date-pick"
                      type="text"
                      name="dates"
                      placeholder="When.."
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="panel-dropdown">
                    <a href="#">
                      Guests <span className="qtyTotal hotels">1</span>
                    </a>
                    <div className="panel-dropdown-content">
                      {/* Quantity Buttons */}
                      <div className="qtyButtons hotels">
                        <label>Adults</label>
                        <input
                          type="text"
                          name="qtyInput_hotels"
                          defaultValue={1}
                        />
                      </div>
                      <div className="qtyButtons hotels">
                        <label>Childrens</label>
                        <input
                          type="text"
                          name="qtyInput_hotels"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
              {/* /row */}
            </form>
          </div>
          {/* End tab */}
          <div className="tab-pane" id="restaurants">
            <form>
              <div className="row no-gutters custom-search-input-2">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Restaurant Name, City..."
                    />
                    <i className="icon_pin_alt" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-group">
                    <input
                      className="form-control date-pick"
                      type="text"
                      name="dates"
                      placeholder="When.."
                    />
                    <i className="icon_calendar" />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="panel-dropdown">
                    <a href="#">
                      Guests <span className="qtyTotal restaurants">1</span>
                    </a>
                    <div className="panel-dropdown-content">
                      {/* Quantity Buttons */}
                      <div className="qtyButtons restaurants">
                        <label>Adults</label>
                        <input
                          type="text"
                          name="qtyInput_restaurants"
                          defaultValue={1}
                        />
                      </div>
                      <div className="qtyButtons restaurants">
                        <label>Childrens</label>
                        <input
                          type="text"
                          name="qtyInput_restaurants"
                          defaultValue={0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <input
                    type="submit"
                    className="btn_search"
                    defaultValue="Search"
                  />
                </div>
              </div>
              {/* /row */}
            </form>
          </div>
          {/* End tab */}
        </div>
      </div>
      {/* End search_container_2 */}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchTourStart: (value) => dispatch(searchTourStart(value)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchBoxV2));

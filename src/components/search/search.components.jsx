import React, { useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";
import Select from "react-select";

import { searchTourStart } from "../../redux/search/search.action";

import { dataDestination } from "./data-search";

import "react-datepicker/dist/react-datepicker.css";
import "./search.styles.scss";

const SearchPages = ({ searchTourStart, history, match }) => {
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

      if (match.path === "/search-result") {
        return;
      } else {
        history.push("/search-result");
      }
    }
  };

  return (
    <>
      <section id="search_container">
        <div id="search">
          <div className="tab-content">
            <div className="tab-pane active show" id="tours">
              <h3>Chọn tour của bạn</h3>
              <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Nơi khởi hành</label>
                    <div className="box">
                      <Select
                        name="departure"
                        value={departure}
                        onChange={handleSelectChange("departure")}
                        options={optionsDeparture}
                        isClearable="true"
                        placeholder="Nơi khởi hành..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Điểm đến</label>
                    <div className="box">
                      <Select
                        name="destination"
                        value={destination}
                        onChange={handleSelectChange("destination")}
                        options={optionsDestination}
                        isClearable="true"
                        placeholder="Điểm đến..."
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Chọn ngày đi
                    </label>
                    <DatePicker
                      selected={date}
                      minDate={new Date()}
                      onChange={onDateChange}
                      className="date-pick form-control"
                      placeholderText="Ngày đi..."
                      isClearable
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Chọn giá tour</label>
                    <div className="box">
                      <Select
                        name="price"
                        options={optionsPrice}
                        onChange={handleSelectChange("price")}
                        value={price}
                        isClearable="true"
                        placeholder="Mức giá..."
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End row */}
              {/* <div className="row">
                <div className="col-md-3">
                  <div className="form-group">
                    <label>
                      <i className="icon-calendar-7" /> Chọn ngày đi
                    </label>
                    <DatePicker
                      selected={date}
                      minDate={new Date()}
                      onChange={onDateChange}
                      className="date-pick form-control"
                      placeholderText="Chọn ngày đi..."
                      isClearable
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Chọn giá tour</label>
                    <div className="box">
                      <Select
                        name="price"
                        options={optionsPrice}
                        onChange={handleSelectChange("price")}
                        value={price}
                        isClearable="true"
                        placeholder="Chọn giá..."
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* End row */}
              <hr />
              <button className="btn_1 green" onClick={handleSearch}>
                <i className="icon-search" />
                Chọn
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  searchTourStart: (value) => dispatch(searchTourStart(value)),
});

export default withRouter(connect(null, mapDispatchToProps)(SearchPages));

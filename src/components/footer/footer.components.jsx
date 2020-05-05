import React from "react";
import { Link } from "react-router-dom";
import FacebookFanpages from "../facebook-pages/facebook-pages.components";

const Footer = () => (
  <React.Fragment>
    <footer className="revealed">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Cần giúp đỡ?</h3>
            <a href="tel://0985007449" id="phone">
              +84 985 007 449
            </a>
            <a href="mailto:khoamilan123@gmail.com" id="email_footer">
              khoamilan123@gmail.com.com
            </a>
          </div>
          <div className="col-md-2">
            <h3>Liên kết</h3>
            <ul>
              <li>
                <Link to="/about">Giới thiệu</Link>
              </li>

              <li>
                <Link to="/tour">Tất cả Tour</Link>
              </li>

              <li>
                <Link to="/contact">Liên hệ</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <h3>Tour</h3>
            <ul>
              <li>
                <Link to="/tours/tour-mien-bac/1">Tour miền Bắc</Link>
              </li>
              <li>
                <Link to="/tours/tour-mien-trung/2">Tour miền Trung</Link>
              </li>
              <li>
                <Link to="/tours/tour-mien-nam/3">Tour miền Nam</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Trang</h3>
            <FacebookFanpages />
          </div>
        </div>
        {/* End row */}
      </div>
      {/* End container */}
    </footer>
    {/* End footer */}

    {/* Search Menu */}
    <div className="search-overlay-menu">
      <span className="search-overlay-close">
        <i className="icon_set_1_icon-77" />
      </span>
      <form role="search" id="searchform" method="get">
        <input defaultValue name="q" type="search" placeholder="Search..." />
        <button type="submit">
          <i className="icon_set_1_icon-78" />
        </button>
      </form>
    </div>
    {/* End Search Menu */}
  </React.Fragment>
);

export default Footer;

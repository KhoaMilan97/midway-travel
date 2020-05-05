import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { signOutStart } from "../../redux/user/user.action";
import { getTypeStart } from "../../redux/type-tour/type-tour.action";
import { selectAllType } from "../../redux/type-tour/type-tour.selector";

import "./header.styles.scss";

class Header extends React.Component {
  state = {
    show: false,
  };

  componentDidMount() {
    const { getTypeStart } = this.props;
    getTypeStart();

    window.addEventListener("scroll", () => {
      let activeClass = "";
      if (window.scrollY >= 1) {
        activeClass = "sticky";
      } else {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }

  handleClick = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const { signOutStart, currentUser, types } = this.props;

    let className = ["main-menu"];
    let classLayer = ["layer"];
    let classButton = [
      "cmn-toggle-switch",
      "cmn-toggle-switch__htx",
      "open_close",
    ];
    if (this.state.show) {
      className = ["main-menu", "show"];
      classLayer = ["layer", "layer-is-visible"];
      classButton = [
        "cmn-toggle-switch",
        "cmn-toggle-switch__htx",
        "open_close",
        "active",
      ];
    }
    return (
      <div>
        <div className={classLayer.join(" ")} onClick={this.handleClick} />
        <header className={this.state.activeClass}>
          <div id="top_line">
            <div className="container">
              <div className="row">
                <div className="col-6">
                  <i className="icon-phone" />
                  Gọi ngay:
                  <strong> 0985 007 449</strong>
                </div>
                <div className="col-6">
                  <ul id="top_links">
                    <li className="submenu">
                      <Link to="/contact" className="show-submenu">
                        Liên hệ
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="/" className="show-submenu">
                        Tin tức
                      </Link>
                    </li>
                    <li>
                      {currentUser ? (
                        <div>
                          <span>
                            Xin chào: <strong>{currentUser.displayName}</strong>
                          </span>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={signOutStart}
                          >
                            {" "}
                            | Thoát
                          </span>
                        </div>
                      ) : (
                        <Link to="/sign-in" id="access_link">
                          Đăng nhập
                        </Link>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
              {/* End row */}
            </div>
            {/* End container*/}
          </div>
          {/* End top line*/}
          <div className="container">
            <div className="row">
              <div className="col-3">
                <div id="logo_home">
                  <h1>
                    <Link to="/" title="Midway travel booking">
                      Midway travel booking
                    </Link>
                  </h1>
                </div>
              </div>
              <nav className="col-9">
                <button
                  className={classButton.join(" ")}
                  onClick={this.handleClick}
                >
                  <span>Menu mobile</span>
                </button>
                <div className={className.join(" ")}>
                  <div id="header_menu">
                    <img
                      src="img/logo_midway_sticky.png"
                      width={160}
                      height={34}
                      alt="City tours"
                      data-retina="true"
                    />
                  </div>
                  <button
                    className="open_close"
                    id="close_in"
                    onClick={this.handleClick}
                  >
                    <i className="icon_set_1_icon-77" />
                  </button>
                  <ul>
                    <li className="submenu">
                      <Link to="/" className="show-submenu">
                        Trang chủ
                      </Link>
                    </li>
                    <li className="submenu">
                      <Link to="/about" className="show-submenu">
                        Giới thiệu
                      </Link>
                    </li>

                    {types
                      .map((type) => (
                        <li key={type.id} className="submenu">
                          <Link
                            to={`/tours/${type.type_link}/${type.id}`}
                            className="show-submenu"
                          >
                            {type.name_type}
                          </Link>
                        </li>
                      ))
                      .slice(0, 4)}
                  </ul>
                </div>
                {/* End main-menu */}
              </nav>
            </div>
          </div>
          {/* container */}
        </header>
        {/* End Header */}
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  types: selectAllType,
});

const mapDispachToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
  getTypeStart: () => dispatch(getTypeStart()),
});

export default connect(mapStateToProps, mapDispachToProps)(Header);

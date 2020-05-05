import React from "react";
import { Link, Redirect } from "react-router-dom";

import Summary from "../../components/summary/summary.components";

class Confirmation extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  render() {
    const { user } = this.props;

    if (!user) return <Redirect to="/" />;
    return (
      <React.Fragment>
        <section id="hero_2">
          <div className="intro_title">
            <h1>Đặt hàng</h1>
            <div className="bs-wizard row">
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Giỏ hàng</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/cart" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Chi tiết</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/" className="bs-wizard-dot" />
              </div>
              <div className="col-4 bs-wizard-step complete">
                <div className="text-center bs-wizard-stepnum">Hoàn thành!</div>
                <div className="progress">
                  <div className="progress-bar" />
                </div>
                <Link to="/confirm" className="bs-wizard-dot" />
              </div>
            </div>
            {/* End bs-wizard */}
          </div>
        </section>
        {/* End intro-title */}
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>Thông tin chi tiết</li>
              </ul>
            </div>
          </div>
          {/* End position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-lg-8 add_bottom_15">
                <div className="form_title">
                  <h3>
                    <strong>
                      <i className="icon-ok" />
                    </strong>
                    Cảm ơn bạn!
                  </h3>
                </div>
                <div className="step">
                  <p>
                    Cảm ơn bạn đã mua các sản phẩm của tôi. Bộ phận hỗ trợ khách
                    hàng sẽ liên hệ với bạn trong vòng 24h để hoàn tất đơn hàng.
                    Chúc bạn có nhiều trải nghiệm mới trong chuyến đi và mong
                    rằng đây là một trong những chuyến đi tuyệt vời, trong hành
                    trình khám phá riêng của bạn. Trân trọng.
                  </p>
                </div>
                {/*End step */}
                <div className="form_title">
                  {/* <h3>
                    <strong>
                      <i className="icon-tag-1" />
                    </strong>
                    Thông tin đặt hàng
                  </h3> */}
                </div>
                <div className="step">
                  <table className="table table-striped confirm">
                    <Summary title="Tổng kết đơn hàng" />
                  </table>
                </div>
                {/*End step */}
              </div>
              {/*End col */}
              <aside className="col-lg-4">
                <div className="box_style_1">
                  <h3 className="inner">Cảm ơn!</h3>
                  <p>Cảm ơn quý khách đã đặt tour tại Midway</p>
                </div>
                <div className="box_style_4">
                  <i className="icon_set_1_icon-89" />
                  <h4>
                    Cần <span>hỗ trợ?</span>
                  </h4>
                  <a href="tel://004542344599" className="phone">
                    +84985 007 449
                  </a>
                  <small>Thứ 2 - Thứ 6 9:00 - 17:30</small>
                </div>
              </aside>
            </div>
            {/*End row */}
          </div>
          {/*End container */}
        </main>
      </React.Fragment>
    );
  }
}

export default Confirmation;

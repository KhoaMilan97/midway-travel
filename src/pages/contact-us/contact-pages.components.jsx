import React from "react";
import { Link } from "react-router-dom";

import BannerHeader from "../../shared/banner-header.components";

import "./contact-pages.styles.scss";

class ContactPages extends React.Component {
  componentDidMount() {
    document.title = this.props.title;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Chức năng đang được xây dựng và hoàn thành trong thời gian sớm nhất"
    );
  };

  render() {
    return (
      <React.Fragment>
        <BannerHeader title="Liên hệ" />
        <main>
          <div id="position">
            <div className="container">
              <ul>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li>Liên hệ</li>
              </ul>
            </div>
          </div>
          {/* End Position */}
          <div className="container margin_60">
            <div className="row">
              <div className="col-md-8">
                <div className="form_title">
                  <h3>
                    <strong>
                      <i className="icon-pencil" />
                    </strong>
                    Vui long điền vào mẫu bên dưới
                  </h3>
                  <p>Chúng tôi sẽ phản hồi bạn sớm nhất có thể.</p>
                </div>
                <div className="step">
                  <div id="message-contact" />
                  <form id="contactform" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Họ</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name_contact"
                            name="name_contact"
                            placeholder="vd: Nguyễn Văn"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Tên</label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastname_contact"
                            name="lastname_contact"
                            placeholder="vd: Tèo"
                          />
                        </div>
                      </div>
                    </div>
                    {/* End row */}
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Địa chỉ email</label>
                          <input
                            type="email"
                            id="email_contact"
                            name="email_contact"
                            className="form-control"
                            placeholder="vd: teo@gmail.com"
                          />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>Số điện thoại</label>
                          <input
                            type="text"
                            id="phone_contact"
                            name="phone_contact"
                            className="form-control"
                            placeholder="vd: 0963232863"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <label>Lời nhắn</label>
                          <textarea
                            rows={5}
                            id="message_contact"
                            name="message_contact"
                            className="form-control"
                            placeholder="Nhập lời nhắn của bạn ở đây"
                            style={{ height: "200px" }}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <input
                          type="submit"
                          defaultValue="Submit"
                          className="btn_1"
                          id="submit-contact"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* End col-md-8 */}
              <div className="col-md-4">
                <div className="box_style_1">
                  <span className="tape" />
                  <h4>
                    Địa chỉ{" "}
                    <span>
                      <i className="icon-pin pull-right" />
                    </span>
                  </h4>
                  <p>
                    Công viên phần mềm Quang, QTSC Building 1, Trung, P, Quận
                    12, Hồ Chí Minh
                  </p>
                  <hr />
                  <h4>
                    Trung tâm trợ giúp{" "}
                    <span>
                      <i className="icon-help pull-right" />
                    </span>
                  </h4>
                  <p>
                    Tiếp nhận thông tin đóng góp khách hàng nhằm mục đích cải
                    tiến dịch vụ tốt nhất dành cho khách hàng. Mọi chi tiết
                    nhanh nhất vui lòng liên hệ số điện thoại bên dưới.
                  </p>
                  <ul id="contact-info">
                    <li>+ 84 96 3232 864 / + 84 985 007 449</li>
                    <li>
                      <a href="!#">khoamilan123@gmail.com</a>
                    </li>
                  </ul>
                </div>
                <div className="box_style_4">
                  <i className="icon_set_1_icon-57" />
                  <h4>
                    Cần <span>giúp đỡ?</span>
                  </h4>
                  <a href="tel://0963232864" className="phone">
                    +84 96 3232 864
                  </a>
                  <small>Thứ 2 đến Thứ 6: 9.00am - 7.30pm</small>
                </div>
              </div>
              {/* End col-md-4 */}
            </div>
            {/* End row */}
          </div>
          {/* End container */}
          <div id="map_contact">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15673.7732142759!2d106.61960542201993!3d10.853848385152041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2222564f53ae228d!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1585994803308!5m2!1svi!2s"
              height={450}
              width={600}
              frameBorder={0}
              style={{ border: 0 }}
              allowFullScreen
              aria-hidden="false"
              tabIndex={0}
              title="Google maps"
            />
          </div>
          {/* end map*/}

          {/* end directions*/}
        </main>
      </React.Fragment>
    );
  }
}

export default ContactPages;

import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import BannerHeader from "../../shared/banner-header.components";

const About = ({ title }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <React.Fragment>
      <BannerHeader
        title="Về chúng tôi"
        content="Việt Nam nguyên chất 100% - Cảm nhận điều khác biệt"
      />
      <main>
        <div id="position">
          <div className="container">
            <ul>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>giới thiệu</li>
            </ul>
          </div>
        </div>
        {/* End Position */}
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Việt nam <span>MIDWAY </span> travel
            </h2>
            <br />
            <p>
              Cung cấp dịch vụ du lịch chất lượng, tin cậy, cho phép khách hàng
              đặt những chuyến đi hoàn hảo.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="feature">
                <i className="icon_set_1_icon-30" />
                <h3>
                  <span>1000+ </span> Khách hàng
                </h3>
                <p>
                  Đã có hàng nghìn khách hàng tin tưởng và sử dụng dịch vụ của
                  chúng tôi.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.2s">
              <div className="feature">
                <i className="icon_set_1_icon-41" />
                <h3>
                  <span>100+ </span> Tour du lịch cao cấp
                </h3>
                <p>
                  Với danh sách tour du lịch đa dạng đảm bảo phục vụ tốt nhất
                  với những chuyến đi của khách hàng.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
          <div className="row">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.3s">
              <div className="feature">
                <i className="icon_set_1_icon-57" />
                <h3>
                  Hỗ trợ <span>24h</span>
                </h3>
                <p>
                  ĐỘi ngũ nhân viên hỗ trợ 24/7 giúp giải đáp thắc mắc cũng như
                  giải quyết vấn đề nhanh chóng.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.6s">
              <div className="feature">
                <i className="icon_set_1_icon-22" />
                <h3>
                  Cho phép <span>thú cưng</span>
                </h3>
                <p>
                  Công ty cho phép bạn mang theo thú cưng trên hành trình để đảm
                  bảo mang lại trải nghiệm tốt nhất.
                </p>
              </div>
            </div>
          </div>
          {/* End row */}
          <hr />
          <div className="row">
            <div className="col-lg-6">
              <h4>Đa dạng trong lựa chọn</h4>
              <p>
                Cung cấp đa dạng các tour du dịch ghép khách lẻ theo nhóm hoặc
                thiết kế theo yêu cầu cho khách đoàn trên các tuyến điểm tại
                Việt Nam.{" "}
              </p>
              <div className="general_icons">
                <ul>
                  <li>
                    <i className="icon_set_1_icon-59" />
                    Bữa sáng
                  </li>
                  <li>
                    <i className="icon_set_1_icon-8" />
                    Bữa tối
                  </li>
                  <li>
                    <i className="icon_set_1_icon-32" />
                    Nhiếp ảnh
                  </li>
                  <li>
                    <i className="icon_set_1_icon-50" />
                    Mua sám
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <h4>Chất lượng trong phục vụ</h4>
              <p>
                Trải nghiệm khách hàng là yếu tố then chốt để một doanh nghiệp
                phát triển bền vững. Midway Travel luôn đảm bảo điều đó.{" "}
              </p>
              <div className="general_icons">
                <ul>
                  <li>
                    <i className="icon_set_1_icon-98" />
                    Hướng dân
                  </li>
                  <li>
                    <i className="icon_set_1_icon-27" />
                    Bai đổ xe
                  </li>
                  <li>
                    <i className="icon_set_1_icon-36" />
                    Đổi
                  </li>
                  <li>
                    <i className="icon_set_1_icon-63" />
                    Di động
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End container */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 nopadding features-intro-img">
              <div className="features-bg">
                <div className="features-img" />
              </div>
            </div>
            <div className="col-lg-6 nopadding">
              <div className="features-content">
                <h3>"Ket Noi Nhung Chan Troi"</h3>
                <p>
                  Như những cánh chim bay khắp bốn phương trời, <br />
                  Đoàn ta đi đắp những con đường sáng tươi. <br />
                  Kìa chân mây xa xôi nắng hồng đang vẫy gọi, <br />
                  Ta lên đường phới phới tuổi hai mươi.
                </p>
                <p>
                  <a href="/" className=" btn_1 white">
                    Xem thêm
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End container-fluid  */}
        <div className="container margin_60">
          <div className="main_title">
            <h2>
              Điều <span>khách hàng </span>nói về chúng tôi
            </h2>{" "}
            <br />
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="review_strip">
                <img
                  src="img/avatar2.jpg"
                  alt="avatar"
                  className="rounded-circle"
                />
                <h4>Anh: Phạm Huy Quang - HCM</h4>
                <p>
                  "Tôi đã đi tour 5N4Đ Nha Trang từ 04/07 đến 08/07. Nhóm gia
                  đình chúng tôi 12 người (cả đoàn là 20 người) nói chung cảm
                  nhận rất tuyệt với cách tổ chức của các bạn, cảm ơn bạn HDV
                  Long đã cùng đoàn từ HCM sang suốt hành trình đến khi về an
                  toàn &amp; vui vẻ nhiệt tình. 2 Bạn HDV ở Nha Trang cũng rất
                  vui vẻ, thân thiện, có duyên. Nếu có dịp chúng tôi sẽ còn quay
                  lại với Midway."
                </p>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className=" icon-star-empty" />
                </div>
              </div>
              {/* End review strip */}
            </div>
            <div className="col-lg-6">
              <div className="review_strip">
                <img
                  src="img/avatar2.jpg"
                  alt="avatar"
                  className="rounded-circle"
                />
                <h4>Anh: Lê Hồng Thật - Tây Ninh</h4>
                <p>
                  "Vừa rồi mình có liên hệ và được bạn Mai Lê tư vấn mua vé máy
                  bay từ TP. HCM đến Phú Quốc và Phú Quốc về TP.HCM, mình rất
                  hài lòng. Mai Lê hướng dẫn chi tiết và rất nhiệt tình, giá vé
                  lại hợp lý. Cám ơn Mai Lê và Công ty! Hứa hẹn sẽ gặp lại trong
                  nhiều ngày gần nhất!!!"
                </p>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className=" icon-star voted" />
                  <i className=" icon-star voted" />
                </div>
              </div>
              {/* End review strip */}
            </div>
          </div>
          {/* End row */}
          <div className="row">
            <div className="col-lg-6">
              <div className="review_strip">
                <img
                  src="img/avatar2.jpg"
                  alt="avatar"
                  className="rounded-circle"
                />
                <h4>Anh: Trần Công Danh - Thái Bình</h4>
                <p>
                  "Mình cũng mới dùng Midway lần đầu nhưng thấy nhân viên nhiệt
                  tình và có trách nhiệm. Bạn Hoàng Thị Lý đã làm rất tốt phần
                  tư vấn Vinpearl và cả phần thay đổi cho người ít trải nghiệm
                  như mình. Cảm ơn em Lý và chúc em cùng Công ty phát triển tốt.
                  Hẹn gặp lại và sẽ giới thiệu cho mọi người."
                </p>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className=" icon-star-empty" />
                  <i className=" icon-star-empty" />
                </div>
              </div>
              {/* End review strip */}
            </div>
            <div className="col-lg-6">
              <div className="review_strip">
                <img
                  src="img/avatar2.jpg"
                  alt="avatar"
                  className="rounded-circle"
                />
                <h4>Chị: Mai Huệ - HCM</h4>
                <p>
                  "Rất cảm ơn midway về dịch vụ của các bạn. Tôi đánh giá cao
                  chất lượng phục vụ. Giá cả hợp lý, Nhân viên tư vấn Quỳnh
                  Nguyễn và các nhân viên Midway nhiệt tình, mình sẽ tiếp tục sử
                  dụng dịch vụ bên MIdway trong thừi gian tới."
                </p>
                <div className="rating">
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className="icon-star voted" />
                  <i className=" icon-star voted" />
                  <i className=" icon-star-empty" />
                </div>
              </div>
              {/* End review strip */}
            </div>
          </div>
          {/* End row */}
          <hr />
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/laptop.png"
                alt="Laptop"
                className="img-fluid laptop"
              />
            </div>
            <div className="col-md-6">
              <h3>
                <span>Bắt đầu </span> với Midway
              </h3>
              <p>
                Còn chờ đợi gì mà không đến và sử dụng dịch vụ của Midway ngay
                ^^!
              </p>
              <ul className="list_order">
                <li>
                  <span>1</span>Lựa chọn tour yêu thích
                </li>
                <li>
                  <span>2</span>Thanh toán vé và các yêu cầu
                </li>
                <li>
                  <span>3</span>Đón khách tại trụ sở chính
                </li>
              </ul>
              <a href="all_tour_list.html" className="btn_1">
                Đi ngay
              </a>
            </div>
          </div>
          {/* End row */}
        </div>
        {/* End Container */}
      </main>
    </React.Fragment>
  );
};

export default About;

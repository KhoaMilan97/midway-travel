import React from "react";

const BannerHeader = ({ title, content }) => (
  <section
    className="parallax-window"
    data-parallax="scroll"
    data-image-src="img/header_bg.jpg"
    data-natural-width={1400}
    data-natural-height={470}
    style={{
      backgroundImage: `url(/img/header_bg.jpg)`,
      width: "100%",
      height: "470",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="parallax-content-1">
      <div className="animated fadeInDown">
        <h1>{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  </section>
);

export default BannerHeader;

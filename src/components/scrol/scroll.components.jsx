import React, { Component } from "react";
import { ScrollTo } from "react-scroll-to";

class Scroll extends Component {
  state = {
    activeClass: "",
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      let activeClass = "";
      if (window.scrollY >= 800) {
        activeClass = "visible";
      } else {
        activeClass = "";
      }
      this.setState({ activeClass });
    });
  }

  render() {
    return (
      <ScrollTo>
        {({ scroll }) => (
          <div
            id="toTop"
            className={this.state.activeClass}
            onClick={() => scroll({ y: 0, smooth: true })}
          ></div>
        )}
      </ScrollTo>
    );
  }
}

export default Scroll;

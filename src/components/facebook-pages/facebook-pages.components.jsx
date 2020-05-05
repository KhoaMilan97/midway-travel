import React, { Component } from "react";
import { FacebookProvider, Page } from "react-facebook";

export default class FacebookFanpages extends Component {
  render() {
    return (
      <FacebookProvider appId="1079567482404370">
        <Page href="https://www.facebook.com/Midway-Travel-105080557805790" />
      </FacebookProvider>
    );
  }
}

import React, { Component } from "react";
import ContentComponent from "./ContentComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import NavigationComponent from "./NavigationComponent";

export default class HomeComponent extends Component {
  render() { // Nội dung component luôn luôn bao phủ bởi 1 thẻ
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 m-0 p-0">
            <HeaderComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-4 m-0 p-0">
            <NavigationComponent />
          </div>
          <div className="col-8 m-0 p-0">
            <ContentComponent />
          </div>
        </div>
        <div className="row">
          <div className="col-12 m-0 p-0">
            <FooterComponent />
          </div>
        </div>
      </div>
    );
  }
}

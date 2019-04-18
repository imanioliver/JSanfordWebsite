import React, { Component } from "react";
import "../styles/App.css";
import Header from "./Header";
import Footer from "./Footer";
import ProductHero from "../containers/ProductHero";

class BaseLayout extends Component {
  render() {
    return (
      <div className="containers">
        <Header />
        {this.props.children}
        <ProductHero />
        <Footer />
      </div>
    );
  }
}

export default BaseLayout;

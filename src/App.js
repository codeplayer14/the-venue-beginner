import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured/Featured";
import VenueNfo from "./components/venueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";
import { Element } from "react-scroll";
class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Element>
          {" "}
          <Header />
        </Element>

        <Element>
          <Featured />
        </Element>

        <Element>
          {" "}
          <VenueNfo />
        </Element>

        <Element>
          <Highlights />
        </Element>

        <Element>
          <Pricing />
        </Element>

        <Element>
          <Location />
        </Element>

        <Element>
          <Footer />
        </Element>
      </div>
    );
  }
}

export default App;

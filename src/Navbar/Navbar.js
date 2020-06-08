import React, { Component } from "react";
import ind from "../images/india.png";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <header className="navbar">
        <nav className="navbar_nav">
          <h2>Weather App</h2>
          <div className="currency">
            <p>It tells you the weather</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import "./weather.css";
import { connect } from "react-redux";
import { fetchWeather } from "../redux/actions/weatherActions";

class Weather extends Component {
  constructor() {
    super();
    this.state = {
      city_name: "",
      country_code: "",
    };
  }

  cityChange = (e) => {
    const city_name = e.target.value; // value of the property of some DOM element
    this.setState({
      city_name,
    });
  };
  countryChange = (e) => {
    const country_code = e.target.value;
    this.setState({
      country_code,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.dispatch(
      fetchWeather(this.state.city_name, this.state.country_code)
    );
  };

  render() {
    console.log(this.props.weather);
    return (
      <div id="home">
        <section className="weather">
          <h2>Check the weather here</h2>
          <form>
            <h3>City</h3>
            <input
              type="text"
              placeholder="City"
              value={this.state.city_name}
              onChange={this.cityChange}
            />
            <h3>Country</h3>
            <input
              type="text"
              placeholder="Country"
              value={this.state.country_code}
              onChange={this.countryChange}
            />
            <br />
            <br />
            <button className="weather-button" onClick={this.handleSubmit}>
              Submit
            </button>
            {this.props.weather.weatherObj && (
              <h2 className="temp">
                Enter temperature here {this.props.weather.weatherObj.temp}
              </h2>
            )}
          </form>
        </section>
      </div>
    );
  }
}
//selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    weather: state.weatherObj,
  };
};

export default connect(mapStateToProps)(Weather);

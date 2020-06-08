import { WEATHER } from "./types";
import axios from "axios";

const key = "2c0aa418975547dbbd13a864414e157b";

export const selectWeatherSuccess = (obj) => {
  return {
    type: WEATHER,
    payload: obj,
  };
};
export const fetchWeather = (city_name, country_code) => {
  return (dispatch) => {
    return (
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?city=${city_name}&country=${country_code}&key=${key}`,
          {
            headers: {
              Accept: "application/json",
            },
          }
        )
        //  if (res.ok) {
        //   const parsedRes = res.json();
        //   this.setState({
        //     temp: parsedRes.data[0],
        //   })
        //  }
        .then((res) => {
          console.log(res.data);
          // dispatch(selectCitySuccess(res.data.data[0].city_name));
          // dispatch(selectCountrySuccess(res.data.data[0].country_code));
          dispatch(selectWeatherSuccess(res.data.data[0]));
        })
        .catch((err) => {
          throw err;
        })
    );
    // dispatch(selectCitySuccess("Delhi"));
    // dispatch(selectCountrySuccess("India"));
  };
};

// `https://pro.openweathermap.org/data/2.5/climate/month?q=${city_name},${country_code}&appid=${key}`

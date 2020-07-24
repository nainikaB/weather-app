import { WEATHER } from "./types";
import axios from "axios";

const key = "2c0aa418975547dbbd13a864414e157b";

export const selectWeatherSuccess = (obj) => {
  return {
    type: WEATHER,
    payload: obj, //Payload is a non-official, community accepted (de facto) naming convention for the property that holds the actual data in a Redux action object
  };
};
export const fetchWeather = (city_name, country_code) => {
  return (dispatch) => {
    return axios
      .get(
        `https://api.weatherbit.io/v2.0/current?city=${city_name}&country=${country_code}&key=${key}`,
        {
          headers: {
            Accept: "application/json",
          },
        }
      )

      .then((res) => {
        console.log(res.data);

        dispatch(selectWeatherSuccess(res.data.data[0]));
      })
      .catch((err) => {
        throw err;
      });
  };
};

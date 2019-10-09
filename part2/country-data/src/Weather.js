import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ capital }) => {
  const [weather, setWeather] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const weatherApi = `http://api.weatherstack.com/current?access_key=cd9eedb3c82391e50726edbba1f57516&query=${capital}`;
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(weatherApi);
        setWeather(response.data.current);
        if (response.data.success == false) {
          setIsError(true);
          setIsLoading(false);
        }
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  if (isError) {
    return <div>Couldn't fetch the weather</div>;
  }

  if (isLoading) {
    return <div>Weather is loading...</div>;
  }

  if (!isLoading && !isError) {
    return (
      <div className="Weather">
        <div>
          <strong>temperature</strong>: {weather.temperature} Celsius
        </div>
        <div>
          <img src={weather.weather_icons[0]} />
        </div>
        <div>
          <strong>wind</strong>: {weather.wind_speed} kph direction{" "}
          {weather.wind_dir}
        </div>
      </div>
    );
  }
};

export default Weather;

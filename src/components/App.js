import React, { useState, useEffect } from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    conditions: ""
  });

  // Simulate loading of static weather data
  useEffect(() => {
    setWeatherData({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDisplay weather={weatherData} />
    </div>
  );
};

export default App;

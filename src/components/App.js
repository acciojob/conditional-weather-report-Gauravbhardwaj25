import React, { useState } from "react";
import WeatherDisplay from "./WeatherDisplay";

function App() {
  // Hardcoded weather data
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny"
  });

  return (
    <div>
      <WeatherDisplay weather={weather}></WeatherDisplay>
    </div>
  );
}

export default App;

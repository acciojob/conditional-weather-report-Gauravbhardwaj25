import React from "react";

function WeatherDisplay({ weather }) {
  const { temperature, conditions } = weather;

  // Inline style condition
  const tempStyle = {
    color: temperature > 20 ? "red" : "blue"
  };

  return (
    <>
      <p>Temperature: <span style={tempStyle}>{temperature}</span></p>
      <p>Conditions: {conditions}</p>
    </>
  );
}

export default WeatherDisplay;

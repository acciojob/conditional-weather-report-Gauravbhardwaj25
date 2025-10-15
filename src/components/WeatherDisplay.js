import React from "react";

function WeatherDisplay({ weather }) {
    const { temperature, conditions } = weather;

    const temStyle = {
        color: temperature > 20 ? "red" : "blue"
    };
    return (
        <>
            <p>Temperature : <span style={temStyle}>{temperature}</span> </p>
            <p>Conditions: {conditions}</p>
        </>
    )
}

export default WeatherDisplay;

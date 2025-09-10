function WeatherDisplay() {

    const { Temperature, Conditions } = weather;


    const temStyle = {
        color:weather.Temperature > 20 ? "red" : "blue"
    };
    return (

        <>
            <p>Temperature : <spam style={temStyle}>{Temperature}</spam> </p>
            <p>Conditions: {Conditions}</p>
        </>
    )
}


export default WeatherDisplay;

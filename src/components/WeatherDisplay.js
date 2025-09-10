function WeatherDisplay() {

    const { Temperature, Conditions } = Weather;


    const temStyle = {
        color: Temperature > 20 ? "red" : "blue"
    };
    return (

        <>
            <p>Temperature : <spam style={temStyle}>{Temperature}</spam> </p>
            <p>Conditions: {Conditions}</p>
        </>
    )
}


export default WeatherDisplay;
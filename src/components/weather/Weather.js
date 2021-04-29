import React, { useState, useEffect } from "react";

function GetWeather() {
  const [weatherString, setWeather] = useState(null);

  useEffect(() => {
    const apiKey = "c0b41b78dbafd84aa17b3a6e5dd1dcdb";
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Helsinki" +
        "&appid=" +
        apiKey +
        "&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(
          data.weather[0].description +
            " with Temparture " +
            data.main.temp +
            " °C"
        );
      });

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, []);

  return <div>Weather in Helsinki is {weatherString}</div>;
}
export default GetWeather;

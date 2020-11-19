import React, { useState, useEffect } from 'react';

import WeatherItem from "../WeatherItem/WeatherItem"
import styles from "./Weather.module.scss";

const Weather = () => {
  const [weatherBristol, setWeatherBristol] = useState({
    name: "bristol", 
    main: [
      { humidity: "0", temp:"0", max_temp:"0", min_temp:"0" }
    ],
  });
  const [weatherLondon, setWeatherLondon] = useState({
    name: "London", 
    main: [
      { humidity: "0", temp:"0", max_temp:"0", min_temp:"0" }
    ],
  });
  const [weatherRome, setWeatherRome] = useState({
    name: "Rome", 
    main: [
      { humidity: "0", temp:"0", max_temp:"0", min_temp:"0" }
    ],
  });
  // let [weatherLondon, setWeatherLondon] = useState();
  // let [weatherRome, setWeatherRome] = useState();

  const GetWeatherBristol = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?id=2654675&appid=c34e42c53f3e18afa22571d16fef9ee4&mode=json`, requestOptions)
      .then((response) => response.json())
      .then((weatherBristolRes) => {
        console.log(weatherBristol)
        setWeatherBristol(weatherBristolRes)

      })
      .catch((err) => {
        console.log(err);
      });
  }
  const GetWeatherLondon = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=london&appid=c34e42c53f3e18afa22571d16fef9ee4&mode=json`, requestOptions)
      .then((response) => response.json())
      .then((weatherLondonRes) => {

        setWeatherLondon(weatherLondonRes)

      })
      .catch((err) => {
        console.log(err);
      });
  }
  const GetWeatherRome = () => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=rome&appid=c34e42c53f3e18afa22571d16fef9ee4&mode=json`, requestOptions)
      .then((response) => response.json())
      .then((weatherRomeRes) => {

        setWeatherRome(weatherRomeRes)

      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    document.body.style = 'background: #ffd5cd;';
    console.log("hello");
    GetWeatherBristol()
    console.log(weatherBristol)
    GetWeatherLondon()
    GetWeatherRome()
  }, []);

  return (
    <>
      <div className={styles.cardcontainer}>
      
      <WeatherItem weather={weatherBristol} />
      <WeatherItem weather={weatherLondon}/>
      <WeatherItem weather={weatherRome}/>
      </div>
     

    </>
  )
}

export default Weather;

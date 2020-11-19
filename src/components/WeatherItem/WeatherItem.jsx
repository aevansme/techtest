import React from "react";
import styles from "./WeatherItem.module.scss";

const WeatherItem = (props) => {
  return (
    <div className={styles.card}>
      <h2>{props.weather.name}</h2>
      <h3>{((props.weather.main.temp)-273.15).toFixed(1) + "°C"}</h3>
      <div className={styles.tempcontainer}>
      <h4>{"Max "+((props.weather.main.temp_max)-273.15).toFixed(1) + "°C" }</h4>
      <h4>{"Min "+((props.weather.main.temp_min)-273.15).toFixed(1) + "°C"}</h4>
      </div>
      <div className={styles.humid}>
      <h4>Humidity:</h4>
      <h4>{props.weather.main.humidity} %</h4>
      </div>
      
      

    </div>
  );
};

export default WeatherItem;

import React, { useState } from "react";

const WeatherCard = ({ weather, temperature }) => {
  const [isCelsius, setIsCelsius] = useState(true);

  const handleClick = () => setIsCelsius(!isCelsius);

  return (
    <article className="card">
      <h1 className="card_title">Weather App</h1>
      <h2 className="card_country">
        {weather?.name}, {weather?.sys.country}
      </h2>
      <div className="car_body">
        <div className="card_img-container">
          <img
            className="card_img"
            src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`}
            alt=""
          />
        </div>
        <section className="card_info">
          <h3 className="card_info_title">
            "{weather?.weather[0].description}"
          </h3>
          <ul className="card_info_list">
            <li className="card_info_item">
              <span className="card_info_label">Wind Speed</span>
              {weather?.wind.speed}m/s
            </li>
            <li className="card_info_item">
              <span className="card_info_label">Clouds</span>
              {weather?.clouds.all}%
            </li>
            <li className="card_info_item">
              <span className="card_info_label">Pressure</span>
              {weather?.main.pressure}hPa
            </li>
          </ul>
        </section>
      </div>
      <footer className="card_footer">
        <h2 className="card_ambient">
          {isCelsius
            ? temperature?.celsius + "°C"
            : temperature?.farenheit + "°F"}
        </h2>
        <button className="card_btn" onClick={handleClick}>
          Change to °{isCelsius ? "F" : "C"}
        </button>
      </footer>
    </article>
  );
};

export default WeatherCard;

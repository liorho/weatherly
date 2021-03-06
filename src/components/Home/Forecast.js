import React from 'react';
import { useSelector } from 'react-redux';
import { CardGroup } from 'react-bootstrap';

import DayForecast from './DayForecast';

function Forecast() {
  const cityWeather = useSelector((state) => state.cityWeather);

  return (
    <>
      {cityWeather.weather?.forecast ? (
        <CardGroup className='weather-cards-container bg-inherit'>
          {cityWeather.weather.forecast.map((f, i) => (
            <DayForecast key={i} forecast={f} />
          ))}
        </CardGroup>
      ) : (
        ''
      )}
    </>
  );
}

export default Forecast;

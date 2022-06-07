import React from 'react';
import Button from './Button';
import './Weather.css'

const Weather = () => {
  return (
      <div className="weather">
        <div className="weather__now">
          <div className="temp-now">
            <div className="grad_icon">*</div>
          </div>
        </div>
        <div className="tabs__buttons">
          <Button name="Now"/>
          <Button name="Details"/>
          <Button name="Forecast"/>
        </div>

      </div>
  );
};

export default Weather;
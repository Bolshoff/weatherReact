import React from 'react';
import './CurrentWeather.css'
const CurrentWeather = ({name, temp, weather,icon, url}) => {
  return (
      <div className="weather__now active">
        <div className="temp-now">{temp}
          <div className="grad_icon">*</div>
        </div>
        <div className="nowWeather-icon" style={{backgroundImage: `url(${icon})`}}></div>
        <div className='city'>{name}</div>
        <div className="description" >{weather}</div>
        <div><button>FAV</button></div>
      </div>
  );
};

export default CurrentWeather;
import React from 'react';

const CurrentWeather = ({name, temp, weather}) => {
  return (
      <div className="weather__now active">
        <div className="temp-now">{temp}{weather}
          <div className="grad_icon">*</div>
        </div>
        <div className='city'>{name}</div>
        <div><button>FAV</button></div>
      </div>
  );
};

export default CurrentWeather;
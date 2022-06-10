import React from 'react';

const Details = ({temp, feels, weather, sunrise, sunset, name}) => {
  return (

        <div className='Details'>
          <div className="city">{name}</div>
          Temperature: {temp} <br/>
          Feels like: {feels} <br/>
          Weather: {weather} <br/>
          Sunrise: {sunrise} <br/>
          Sunset: {sunset}

        </div>

  );
};

export default Details;
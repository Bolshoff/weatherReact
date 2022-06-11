import React, {useEffect, useState} from 'react';
import './Forecast.css';

const Forecast = ({name, apiKey}) => {

  const [forecast, setForecast] = useState([]);

 async function fetchForecast(){
   const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}&units=metric`;
   let response = await fetch(forecastUrl).catch((err) => alert(err));
   let forecast = await response.json().catch((err) => alert(err));
    setForecast(forecast.list)

  }

  useEffect(()=>{
    fetchForecast();
  },[]);
  return (
      <div className="forecast">
        {forecast.map(elem =>

          <div key={elem.dt}>
            {elem.main.temp}
          </div>
        )}
      </div>
  );
};

export default Forecast;
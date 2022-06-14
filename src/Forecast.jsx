import React, {useEffect, useState} from 'react';



const Forecast = ({name, apiKey}) => {

  const [forecast, setForecast] = useState([]);


 async function fetchForecast(){
   const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${apiKey}&units=metric`;
   let response = await fetch(forecastUrl).catch((err) => alert(err));
   let forecast = await response.json().catch((err) => alert(err));
    setForecast(forecast.list)
   console.log(forecast);
  }



  useEffect(()=>{
    fetchForecast();
  },[]);
  return (
      <div className="forecast">
        {forecast.map(elem =>

          <div key={elem.dt}>
           Temperatuer: {elem.main.temp}<br/>
           Feels like: {elem.main.feels_like}
          </div>
        )}
      </div>
  );
};

export default Forecast;
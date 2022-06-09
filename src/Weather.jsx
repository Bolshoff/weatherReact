import React, {useEffect, useState} from 'react';
import Button from './Button';
import './Weather.css'
const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey = "3d8af9f7ae111ad0770a6a9d37546134";
const cityName = 'Udachny';
const Weather = () => {

  const [active, setActive] = useState([{title:'Now', active:true},
    {title:'Details', active:false},
    {title:'Forecast', active:false},
  ])
  const [currentWeather, setCurrentWeather] = useState({});


  const toggleNow = (title) =>{
    setActive([{title:'Now', active:true},
      {title:'Details', active:false},
      {title:'Forecast', active:false},
    ])

  }
  const toggleDetails = () =>{
    setActive([{title:'Now', active:false},
      {title:'Details', active:true},
      {title:'Forecast', active:false},
    ])
  }
  const toggleForecast = () =>{
    setActive([{title:'Now', active:false},
      {title:'Details', active:false},
      {title:'Forecast', active:true},
    ])
  }

  async function fetchWeather(){   // const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    let response = await fetch(url).catch((err) => alert(err));
    let weather = await response.json().catch((err) => alert(err));
    console.log(weather);
    let icon =
        "https://openweathermap.org/img/wn/" +
        weather["weather"][0].icon +
        "@2x.png";
    const city = weather.name;
    const temp = weather.main.temp;
    const weatherClouds = 'clouds';
    setCurrentWeather({name:city, temp: temp, weather: weather.weather[0].description, icon:icon});
    // nowWeatherTabItems.temperature.innerHTML = `${Math.floor(weather.main.temp)}`;
    // nowWeatherTabItems.city.innerHTML = weather.name;
    // forecastTabItems.city.innerHTML = weather.name;

  }

 useEffect( ()=>{
    fetchWeather() ;
 },[]);
  return (
      <div className="weather">
        {(active[0].active)?
          <div className="weather__now active">
          <div className="temp-now">{currentWeather.temp}{currentWeather.name}{currentWeather.weather}
            <div className="grad_icon">*</div>
          </div>
        </div> :<div></div>}
        {(active[1].active)?
          <div className='Details'>
          Details
          </div>: <div></div>
        }
        {
          (active[2].active)?
          <div className='Forecast'>
            Forecast
          </div>: <div></div>
        }
        <div className="tabs__buttons">
          <Button title='Now' name="Now" changeTab={toggleNow}/>
          <Button title="Details" name="Details" changeTab={toggleDetails}/>
          <Button title="Forecast" name="Forecast" changeTab={toggleForecast}/>
        </div>

      </div>
  );
};

export default Weather;
import React, {useEffect, useState} from 'react';
import Button from './Button';
import './Weather.css'
import CurrentWeather from './CurrentWeather';
import Details from './Details';
import Forecast from './Forecast';

const serverUrl = "https://api.openweathermap.org/data/2.5/weather";
// const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast";
const apiKey = "50a173c0948ec362d5f23b7e75bea714";
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

  async function fetchWeather(){
    const url = `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;

    let response = await fetch(url).catch((err) => alert(err));
    let weather = await response.json().catch((err) => alert(err));

     let icon ="https://openweathermap.org/img/wn/" + weather["weather"][0].icon +"@2x.png";
    const city = weather.name;
    const temp = weather.main.temp;
    const weatherDescription = weather.weather[0].description;
    setCurrentWeather({name:city,
      temp: Math.round(temp),
      weather: weatherDescription,
      feels:Math.round(weather.main.feels_like) ,
      sunrise: weather.sys.sunrise ,
    sunset: weather.sys.sunrise,
    url:url,
    icon:icon});

  }

 useEffect( ()=>{
    fetchWeather() ;
 },[]);
  return (

      <div className="weather">
        <div className="inputCity">
          <form action="">
            <label>
            <input type="text"/>
            </label>
            <input type="submit" value="GO"/>
          </form>
        </div>
        {(active[0].active)?
         <CurrentWeather name={currentWeather.name}
                          temp={currentWeather.temp}
                          weather={currentWeather.weather}
                          icon={currentWeather.icon}/>:<div></div>}
        {(active[1].active)?
          <Details name={currentWeather.name}
                   temp={currentWeather.temp}
                   weather={currentWeather.weather}
                    feels={currentWeather.feels}
                   sunrise={currentWeather.sunrise}
                   sunset={currentWeather.sunset}/>: <div></div>
        }
        {
          (active[2].active)?
         <Forecast name={currentWeather.name}
                    apiKey={apiKey}/>: <div></div>
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
import React, {useState} from 'react';
import Button from './Button';
import './Weather.css'

const Weather = () => {
  const [tab, setTab] = useState([{title:'Now', active:true},
    {title:'Details', active:false},
    {title:'Forecast', active:false},] )

  const tabToggle = (e)=>{
    const targetName = e.target.name
    // setTab({title:{targetName}, active: true})
    console.log(e.target);
  }

  return (
      <div className="weather">
        <div className="weather__now">
          <div className="temp-now">
            15<div className="grad_icon">*</div>
          </div>
        </div>
        <div className="tabs__buttons">
          <Button name='Now' changeTab={tabToggle}/>
          <Button name='Details' changeTab={tabToggle}/>
          <Button name='Forecast' changeTab={tabToggle}/>
        </div>

      </div>
  );
};

export default Weather;
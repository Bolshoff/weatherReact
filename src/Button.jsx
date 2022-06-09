import React from 'react';
import './Button.css';
const Button = ({name, changeTab}) => {
  return (
      <div className="tabs">
        <button className="tabs__button" onClick={changeTab}>{name}</button>
      </div>
  );
};

export default Button;
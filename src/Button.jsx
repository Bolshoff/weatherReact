import React from 'react';
import './Button.css';
const Button = ({name}) => {
  return (
      <div className="tabs">
        <button className="tabs__button">{name}</button>
      </div>
  );
};

export default Button;
import React from 'react';
import './Button.css';
const Button = ({name, changeTab, title}) => {
  return (
      <div className="tabs">
        <button className="tabs__button"
                title={title}
                onClick={changeTab}>{name}</button>
      </div>
  );
};

export default Button;
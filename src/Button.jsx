import React, {useState} from 'react';

const Button = ({name, condition}) => {
  const [active, setActive] = useState()
  return (
      <button className="button-tab" >
        {name}
        {condition}
      </button>
  );
};

export default Button;
import React from 'react';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

const Stats = () => {
 const cityCount = useSelector(state=>state.countCityReducer.count)
  return (
      <div>
        <h1>Stat</h1>
        <p>Городов просмотрено: {cityCount}</p>
        <Link to="/">To Weather</Link>
        {/*<Link to="/help">Help</Link>*/}

      </div>
  );
};

export default Stats;
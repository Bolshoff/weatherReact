import React from 'react';
import './Favcities.css';
import FavCitiesItem from './FavCitiesItem';

const Favcities = ({favoriteCities, delFavorite}) => {

  return (
      <div className="favorite">
        <div className="fav_description">
          <p>Added location:</p>
        </div>

        <div className="favorite-cities">
          {favoriteCities.map(city=>
           <FavCitiesItem  delFavorite={delFavorite} favcity={city} key={city.id}/>
          )}
        </div>

      </div>
  );
};

export default Favcities;

//todo del function in progress
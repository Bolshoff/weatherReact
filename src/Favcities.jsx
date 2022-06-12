import React from 'react';
import './Favcities.css';

const Favcities = ({favCities, delFavorite}) => {



  return (
      <div className="favorite">
        <div className="fav_description">
          <p>Added location:</p>
        </div>
        <div className="favorite-cities">
          {favCities.map(favcity=>
            <div key={favcity.id} >* {favcity.city}
              <button className="delfavorite" onClick={delFavorite}>
                x
              </button>
            </div>
          )}
        </div>
      </div>
  );
};

export default Favcities;

//todo del function in progress
import React from 'react';

const FavCitiesItem = ({delFavorite, favcity}) => {

  return (
      <div >* {favcity.city}
        <button className="delfavorite"
                onClick={()=>delFavorite(favcity)}>
          x
        </button>
      </div>
  );
};

export default FavCitiesItem;
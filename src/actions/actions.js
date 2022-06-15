export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';

export const ADD_FAVORITE_CITIES = 'ADD_FAVORITE_CITIES';

export function addFavoriteCities(city){
  return {type:ADD_FAVORITE_CITIES, payload:{cityName: city, id: Date.now()}}
}
export function setCurrentCity(city){
  return {type:SET_CURRENT_CITY,
          payload:{
          cityName: city
    }}
}
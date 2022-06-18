export const SET_CURRENT_CITY = 'SET_CURRENT_CITY';
 export const ADD_FAVORITE_CITIES = 'ADD_FAVORITE_CITIES';
export const HANDLE_INPUT_CHANGE = 'HANDLE_INPUT_CHANGE';
export const DELETE_FAVORITE_CITY = 'DELETE_FAVORITE_CITY';
export const SET_COUNT_CITY = 'SET_COUNT_CITY';

export function addFavoriteCities(city){
  return {type:ADD_FAVORITE_CITIES,
          payload:{
            cityName: city,
            id: Date.now()}
          }
}
// export const delFavoriteCity = (favcity)=> {
//   return {
//     type: DELETE_FAVORITE_CITY,
//     payload:{
//        favcity.id
//     }
//
//   }
// }
export function setCurrentCity(city){
  return {type:SET_CURRENT_CITY,
          payload:{
          cityName: city
    }}
}
export const handleInputChange = (value) => {
  return {
    type: HANDLE_INPUT_CHANGE,
    payload: { cityName: value}
  }
}
export const handleCountCity = (count) => {
  return{
    type: SET_COUNT_CITY,
    count
  }

}
import {ADD_FAVORITE_CITIES, DELETE_FAVORITE_CITY} from '../actions/actions';

const defaultState = {
  favoriteCities: []
}
const favoriteCitiesReducer = (state = defaultState, action)=>{
  switch (action.type) {
    case ADD_FAVORITE_CITIES:

      return {
        ...state,
        favoriteCities: [...state.favoriteCities, action.payload]
      }
    case DELETE_FAVORITE_CITY:
      return {
        ...state,
        favoriteCities: state.favoriteCities.filter((city) => city.id !== action.payload)

      }

    default:
      return state;
  }
}
export default favoriteCitiesReducer;
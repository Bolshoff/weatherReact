import {ADD_FAVORITE_CITIES} from '../actions/actions';

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

    default:
      return state;
  }
}
export default favoriteCitiesReducer;
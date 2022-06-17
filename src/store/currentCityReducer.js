import {HANDLE_INPUT_CHANGE, SET_CURRENT_CITY} from '../actions/actions';

const defaultState = {
  cityName:'Moscow'
}

const currentCityReducer = (state = defaultState, action) =>{
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {...state, ...action.payload}
    case HANDLE_INPUT_CHANGE: {
      return {
        ...state, ...action.payload
      }
    }
    default:
      return state;
  }
}
export default currentCityReducer;
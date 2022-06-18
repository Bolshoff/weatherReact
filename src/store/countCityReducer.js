import {
   SET_COUNT_CITY,
  } from '../actions/actions';

const defaultState = {
  count: 0
}

const countCityReducer = (state=defaultState, action)=>{
  switch (action.type) {
    case SET_COUNT_CITY:
      return { ...state,
        count: state.count + 1}

    default:
      return state;
  }
}


export default countCityReducer;
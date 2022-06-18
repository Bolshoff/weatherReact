import {combineReducers, createStore} from 'redux';
import currentCityReducer from './currentCityReducer';
import favoriteCitiesReducer from './favoriteCitiesReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import countCityReducer from './countCityReducer';

const rootReducer = combineReducers({
  currentCityReducer,
  favoriteCitiesReducer,
  countCityReducer
})
export const  store = createStore(rootReducer, composeWithDevTools());
import {combineReducers, createStore} from 'redux';
import currentCityReducer from './currentCityReducer';
import favoriteCitiesReducer from './favoriteCitiesReducer';
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
  currentCityReducer,
  favoriteCitiesReducer,
})
export const  store = createStore(rootReducer, composeWithDevTools());
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {
  ADD_FAVORITE_CITIES,
  HANDLE_INPUT_CHANGE,
  SET_CURRENT_CITY,
} from './actions/actions';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';

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
const defaultFavoriteCities = {
  favoriteCities: []
}
const favoriteCitiesReducer = (state = defaultFavoriteCities, action)=>{
  switch (action.type) {
    case "ADD_FAVORITE_CITIES":

      return {...state, favoriteCities: [...state, action.payload]}

    default:
      return state;
  }
}

const rootReducer = combineReducers({
   currentCityReducer,
   favoriteCitiesReducer,
})
const  store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


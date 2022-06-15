import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from 'redux';
import {SET_CURRENT_CITY} from './actions/actions';
import {Provider} from 'react-redux';

const defaultState = {
  cityName:'Moscow'
}

const reducer = (state = defaultState, action) =>{
  switch (action.type) {
    case SET_CURRENT_CITY:
      return {...state, citiName: 'city'}
    default:
      return state
  }
}
const  store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>

  </React.StrictMode>
);


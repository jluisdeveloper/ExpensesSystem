import React from 'react'
import ReactDOM from 'react-dom'

import 'react-app-polyfill/ie11'; // For IE 11 support
import 'react-app-polyfill/stable';

import { Provider } from 'react-redux'
import store from "../store";

import { icons } from "../assets/icons";

React.icons = icons

import App from "../Components/App";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.body.appendChild(document.createElement('div')),
  )
})
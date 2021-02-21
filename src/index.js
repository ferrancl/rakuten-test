import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'

import store from './store'
import {App} from './App'

console.log('eeaaaaa')

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
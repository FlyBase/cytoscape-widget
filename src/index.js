import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/browser'

import './index.css'
//import App from './components/App'
import TestContainer from './components/TestContainer'
import * as serviceWorker from './serviceWorker'

Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

ReactDOM.render(<TestContainer />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

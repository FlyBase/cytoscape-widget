import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'

import React from 'react'
import ReactDOM from 'react-dom'
import { useFetch } from 'react-async'
import * as Sentry from '@sentry/browser'

import './index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'

// Initialize debugging capture.
Sentry.init({
  dsn: process.env.REACT_APP_SENTRY_DSN,
  environment: process.env.NODE_ENV,
})

// Accessibility scanning for development mode.
if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe')
  axe(React, ReactDOM, 1000)
}

// Component for handling async fetching of data from the server.
const AppDataWrapper = ({ fbid }) => {
  const { data, error } = useFetch(`/api/networks/${fbid}`, {
    headers: { accept: 'application/json' },
  })
  if (error) return <h3>Failed to fetch network data: {error.message}</h3>
  if (data) {
    // Destruct the response to pull out the network data and load the app.
    const {
      resultset: { result: networkData = [] },
    } = data
    if (networkData[0]) return <App data={networkData[0]} />
  }
  // Return null otherwise
  return null
}

const networkElements = Array.from(
  document.getElementsByClassName('flybase-cytoscape-network')
)

networkElements.forEach(elm => {
  const fbid = elm.getAttribute('data-fbid')
  ReactDOM.render(<AppDataWrapper fbid={fbid} />, elm)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

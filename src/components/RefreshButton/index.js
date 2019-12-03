import React from 'react'
import { RefreshCw } from 'react-feather'

const RefreshButton = ({onClick}) => (
  <button title="refresh" onClick={onClick}>
    <RefreshCw />
  </button>
)

export default RefreshButton
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LayoutControl from '../LayoutControl'
import CytoscapeContainer from '../CytoscapeContainer'

// TODO temporary data and style import.  Replace with API call.
import cytoscapeNetwork from './wnt-tcf'
import functionsStyle from './functions-style'
import pathwaysStyle from './pathways-style'
import Legend from 'components/Legend'

const availableNetworks = {
  functional: functionsStyle,
  pathway: pathwaysStyle,
}

const App = () => {
  const [networkStyle, setNetworkStyle] = useState('functional')
  return (
    <div>
      <LayoutControl handleOnClick={layout => setNetworkStyle(layout)} />
      <div
        css={`
          display: flex;
          justify-content: space-between;
          flex-flow: column nowrap;
        `}>
        <CytoscapeContainer
          stylesheet={availableNetworks[networkStyle].style}
          elements={cytoscapeNetwork.elements}
        />
        <Legend networkStyle={networkStyle} />
      </div>
    </div>
  )
}
export default App

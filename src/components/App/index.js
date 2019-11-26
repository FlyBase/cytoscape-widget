import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LayoutControl from '../LayoutControl'
import CytoscapeContainer from '../CytoscapeContainer'

// TODO temporary data and style import.  Replace with API call.
import cytoscapeNetwork from './wnt-tcf'
import functionalStyle from 'components/App/functional-style'
import pathwayStyle from 'components/App/pathway-style'
import Legend from 'components/Legend'

const availableNetworks = {
  functional: functionalStyle,
  pathway: pathwayStyle,
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

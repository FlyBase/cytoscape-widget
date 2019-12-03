import React, { useState } from 'react'
// eslint-disable-next-line
import styled from 'styled-components/macro'
import LayoutControl from 'components/LayoutControl'
import CytoscapeContainer from 'components/CytoscapeContainer'
import { useWindowSize } from '@reach/window-size'

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
  const [networkStyle, setNetworkStyle] = useState('pathway')
  const { width } = useWindowSize()
  console.log("Width", width)
  return (
    <div>
      <div
        css={`
          display: flex;
          flex-flow: row wrap;
          justify-content: space-evenly;
          padding: 20px;

          & > figure {
            flex: 0 1 ${width <= 800 ? '100%'  : '55%'};
          }
          & > div {
            flex: 0 0 20rem;
          }
        `}>
        <CytoscapeContainer
          stylesheet={availableNetworks[networkStyle].style}
          elements={cytoscapeNetwork.elements}>
          <LayoutControl handleOnClick={layout => setNetworkStyle(layout)} />
        </CytoscapeContainer>
        <Legend networkStyle={networkStyle} />
      </div>
    </div>
  )
}
export default App

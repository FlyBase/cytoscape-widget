import React, { useState } from 'react'
// eslint-disable-next-line
import styled from 'styled-components/macro'
import LayoutControl from 'components/LayoutControl'
import CytoscapeContainer from 'components/CytoscapeContainer'

import functionalStyle from 'components/App/functional-style'
import pathwayStyle from 'components/App/pathway-style'
import Legend from 'components/Legend'

const availableNetworks = {
  functional: functionalStyle,
  pathway: pathwayStyle,
}

const App = ({ data }) => {
  const [networkStyle, setNetworkStyle] = useState('pathway')
  return (
    <div>
      <div
        css={`
          display: flex;
          flex-flow: row wrap;
          justify-content: space-evenly;
          padding: 20px;

          & > figure {
            flex: 0 1 55%;
          }
          & > div {
            flex: 0 0 20rem;
          }
          @media all and (max-width: 800px) {
            & > figure {
              flex: 0 1 100%;
            }
          }
        `}>
        <CytoscapeContainer
          stylesheet={availableNetworks[networkStyle].style}
          elements={data.elements}>
          <LayoutControl handleOnClick={layout => setNetworkStyle(layout)} />
        </CytoscapeContainer>
        <Legend networkStyle={networkStyle} />
      </div>
    </div>
  )
}
export default App

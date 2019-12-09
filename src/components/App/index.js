import React, { useState } from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import styled from 'styled-components/macro'
import LayoutControl from 'components/LayoutControl'
import CytoscapeContainer from 'components/CytoscapeContainer'

import functionalStyle from 'components/App/functional-style'
import pathwayStyle from 'components/App/pathway-style'
import Legend from 'components/Legend'

// Cytoscape styles as defined by curators.
const networkStyles = {
  functional: functionalStyle,
  pathway: pathwayStyle,
}

/**
 * Main app component for rendering the cytoscape widget.
 *
 * @param data - The cytoscape network data.  The only required object attribute is 'elements'.
 * @returns {*} - The cytoscape widget.
 */
const App = ({ data }) => {
  // State to hold the currently selected network type.
  const [networkType, setNetworkType] = useState('pathway')
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
            flex: 0 0 auto;
            min-width: 17rem;
          }
          @media all and (max-width: 800px) {
            & > figure {
              flex: 0 1 100%;
            }
          }
        `}>
        <CytoscapeContainer
          stylesheet={networkStyles[networkType].style}
          elements={data.elements}>
          <LayoutControl handleOnClick={layout => setNetworkType(layout)} />
        </CytoscapeContainer>
        <Legend type={networkType} />
      </div>
    </div>
  )
}
App.propTypes = {
  data: PropTypes.shape({
    elements: PropTypes.object,
  }).isRequired,
}
export default App

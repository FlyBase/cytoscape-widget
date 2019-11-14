import React, { useRef } from 'react'
import Cytoscape from 'cytoscape'
import COSEBilkent from 'cytoscape-cose-bilkent'
import CytoscapeComponent from 'react-cytoscapejs'
// eslint-disable-next-line
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Cytoscape.use(COSEBilkent)

const CytoscapeContainer = ({ elements = [] }, style) => {
  const cyRef = useRef(null)
  const layout = { name: 'cose-bilkent' }
  return (
    <figure
      css={`
        border: thin solid grey;
        border-radius: 7px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
      `}>
      <CytoscapeComponent
        elements={elements}
        style={style}
        css={`
          width: 600px;
          height: 450px;
        `}
        layout={layout}
      />
    </figure>
  )
}

CytoscapeContainer.propTypes = {
  elements: PropTypes.array.isRequired,
}

export default CytoscapeContainer

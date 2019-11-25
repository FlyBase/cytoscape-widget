import React, { useState } from 'react'
import Cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import CytoscapeComponent, { normalizeElements } from 'react-cytoscapejs'
import { ZoomIn, ZoomOut } from 'react-feather'

// eslint-disable-next-line
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Cytoscape.use(fcose)

const CytoscapeContainer = ({ elements = [], stylesheet }) => {
  const [zoomLevel, setZoomLevel] = useState(0.5)
  const layout = { name: 'fcose' }
  let cyRef = null
  const zoomOpts = {
    userZoomEnabled: true,
    maxZoom: 2,
    minZoom: 0.3,
  }

  const handleZoom = (direction = 'IN') => {
    switch (direction) {
      case 'OUT':
        if (zoomLevel > zoomOpts.minZoom) {
         setZoomLevel(zoomLevel - 0.1)
        }
        break;
      case 'IN':
        if (zoomLevel < zoomOpts.maxZoom) {
          setZoomLevel(zoomLevel + 0.1)
        }
        break;
      default:
        break;
    }
  }

  return (
    <figure
      css={`
        border: thin solid grey;
        border-radius: 7px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
      `}>
      <button onClick={() => handleZoom('OUT')}>
        <ZoomOut />
      </button>
      <button onClick={() => handleZoom('IN')}>
        <ZoomIn />
      </button>
      <CytoscapeComponent
        elements={normalizeElements(elements)}
        css={`
          width: 100%;
          height: 500px;
        `}
        stylesheet={stylesheet}
        layout={layout}
        cy={cy => (cyRef = cy)}
        zoom={zoomLevel}
        {...zoomOpts}
      />
    </figure>
  )
}

export default CytoscapeContainer

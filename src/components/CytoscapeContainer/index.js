import React, { useState } from 'react'
import Cytoscape from 'cytoscape'
import fcose from 'cytoscape-fcose'
import CytoscapeComponent, { normalizeElements } from 'react-cytoscapejs'
import { ZoomIn, ZoomOut } from 'react-feather'

// eslint-disable-next-line
import styled from 'styled-components/macro'

Cytoscape.use(fcose)

const layout = {
  name: 'fcose',
  directed: true,
  nodeRepulsion: 450000,
  idealEdgeLength: 100,
  gravity: -500,
}
const cytoOpts = {
  userZoomEnabled: true,
  maxZoom: 3,
  minZoom: 0.1,
  panningEnabled: true,
  userPanningEnabled: true,
}

const CytoscapeContainer = ({ elements = [], stylesheet, children }) => {
  const [zoomLevel, setZoomLevel] = useState(1.0)
  const [ cyRef, setCyRef ] = useState(null)

  const handleZoom = (direction = 'IN') => {
    switch (direction) {
      case 'OUT':
        if (cyRef && zoomLevel > cytoOpts.minZoom) {
          setZoomLevel(cyRef.zoom() - 0.05)
        }
        break
      case 'IN':
        if (cyRef && zoomLevel < cytoOpts.maxZoom) {
          setZoomLevel(cyRef.zoom() + 0.05)
        }
        break
      default:
        break
    }
  }

  return (
    <figure
      css={`
        border: thin solid grey;
        border-radius: 7px;
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.6);
      `}>
      <div
        css={`
          display: flex;
          justify-content: space-between;
        `}>
        {children}
        <div>
          <button title="zoom in" onClick={() => handleZoom('IN')}>
            <ZoomIn />
          </button>
          <button title="zoom out" onClick={() => handleZoom('OUT')}>
            <ZoomOut />
          </button>
        </div>
      </div>
      <CytoscapeComponent
        elements={normalizeElements(elements)}
        css={`
          height: 450px;
        `}
        stylesheet={stylesheet}
        layout={layout}
        cy={cy => setCyRef(cy)}
        zoom={zoomLevel}
        {...cytoOpts}
      />
    </figure>
  )
}

export default CytoscapeContainer

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { ZoomIn, ZoomOut } from 'react-feather'
// eslint-disable-next-line
import styled from 'styled-components/macro'

// Import Cytoscape dependencies.
import Cytoscape from 'cytoscape'
// Layout engine
import fcose from 'cytoscape-fcose'
import CytoscapeComponent, { normalizeElements } from 'react-cytoscapejs'

// Register the fcose layout in Cytoscape.
Cytoscape.use(fcose)

// Layout paramters for cytoscape
const layout = {
  name: 'fcose',
  directed: true,
  nodeRepulsion: 450000,
  idealEdgeLength: 100,
  gravity: -500,
}
// Other various cytoscape options.
// See https://github.com/plotly/react-cytoscapejs
const cytoOpts = {
  userZoomEnabled: true,
  maxZoom: 3,
  minZoom: 0.1,
  panningEnabled: true,
  userPanningEnabled: true,
}

/**
 * A container wrapper for the Cytoscape window.
 * @param elements - Graph elements to pass to cytoscape.
 * @param stylesheet - Cytoscape stylesheet.
 * @param children - React elements that will be rendered in the top of the
 *                   cytoscape window.
 * @returns {*} - A component that wraps a cytoscape window.
 */
const CytoscapeContainer = ({ elements = [], stylesheet, children }) => {
  // State for zoom level and holding a reference to the underlying cytoscape
  // object.
  const [zoomLevel, setZoomLevel] = useState(1.0)
  const [cyRef, setCyRef] = useState(null)

  /**
   * Event handler for zooming.
   *
   * @param direction - IN or OUT, default: IN
   */
  const handleZoom = (direction = 'IN') => {
    switch (direction) {
      case 'OUT':
        /**
         * If we have a cytoscape reference and we aren't beyond our zoom limits
         * zoom out from the current zoom level.
         */
        if (cyRef && zoomLevel > cytoOpts.minZoom) {
          setZoomLevel(cyRef.zoom() - 0.05)
        }
        break
      case 'IN':
        /**
         * If we have a cytoscape reference and we aren't beyond our zoom limits
         * zoom in from the current zoom level.
         */
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
        padding: 3px;
        border: thin solid grey;
        border-radius: 7px;
        box-shadow: 2px 2px 6px 0 rgba(0, 0, 0, 0.3);
      `}>
      <div
        css={`
          display: flex;
          justify-content: space-between;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.6);
          align-items: center;
        `}>
        {/* Mount any children pass to component. */}
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
      {/* Cytoscape component renders here */}
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

CytoscapeContainer.propTypes = {
  elements: PropTypes.object.isRequired,
  stylesheet: PropTypes.object.isRequired,
  children: PropTypes.element,
}

export default CytoscapeContainer

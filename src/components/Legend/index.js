import React from 'react'
import { Square, Circle, Triangle } from 'react-feather'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import styled from 'styled-components/macro'

// Import legends for the functional and pathway displays.
import functionalLegend from './functional'
import pathwayLegend from './pathway'

const legends = {
  functional: functionalLegend,
  pathway: pathwayLegend,
}

/**
 * Legend item component.
 *
 * @param label - Label to display.
 * @param color - Color to display next to the item label.
 * @param icon - Component that is used for the legend item icon. Default: SVG square
 * @returns {*} - A legend item with a colored icon and a label.
 */
const Item = ({ label, color = '#000000', Icon = Square, margin = '10px' }) => (
  <div
    css={`
      display: flex;
      align-items: center;
      margin: ${margin};
    `}>
    <Icon size="24px" fill={color} stroke="#595959" />
    <div
      css={`
        margin-left: 5px;
      `}>
      <b>{label}</b>
    </div>
  </div>
)
Item.propTypes = {
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
  icon: PropTypes.element,
}

/**
 * Legend component.
 *
 * @param type - The type of network we are currently displaying.
 * @returns {*} - The legend for the appropriate network type.
 */
const Legend = ({ type = 'functional' }) => (
  <div
    css={`
      display: flex;
      flex-flow: column nowrap;
    `}>
    <h3 style={{ color: 'grey' }}>Legend</h3>
    {legends[type].map((item, i) => (
      <Item key={i} {...item} />
    ))}
    <Item
      icon={Circle}
      color="white"
      label="Protein"
      margin="3rem 1rem 1rem 1rem"
    />
    <Item icon={Triangle} color="white" label="ncRNA" />
  </div>
)
Legend.propTypes = {
  type: PropTypes.string,
}

export default Legend

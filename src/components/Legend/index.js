import React from 'react'
import styled from 'styled-components/macro'

import functionalLegend from './functional'
import pathwayLegend from './pathway'

const legends = {
  functional: functionalLegend,
  pathway: pathwayLegend,
}

const Box = ({color}) => (
  <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.5" y="0.5" width="19" height="19" fill={color} stroke="lightgrey"/>
  </svg>
)

const Item = ({ label, color }) => (
  <div
    css={`
      display: flex;
      align-items: center;
      margin: 10px;
    `}>
      <Box color={color} />
    <div css={`margin-left: 5px`}>
      <b>{label}</b>
    </div>
  </div>
)
const Legend = ({ networkStyle = 'functional' }) => (
  <>
    <h3 style={{color: 'grey'}}>Legend</h3>
    <div
      css={`
      display: flex;
      flex-flow: row wrap;
      justify-content: flex-start;
    `}>
      {legends[networkStyle].map(item => (
        <Item {...item} />
      ))}
    </div>
  </>
)

export default Legend

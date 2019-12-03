import React from 'react'
import { Square, Circle, Triangle } from 'react-feather'
// eslint-disable-next-line
import styled from 'styled-components/macro'

import functionalLegend from './functional'
import pathwayLegend from './pathway'

const legends = {
  functional: functionalLegend,
  pathway: pathwayLegend,
}

const Item = ({ label, color, icon = Square }) => (
  <div
    css={`
      display: flex;
      align-items: center;
      margin: 10px;
    `}>
    {icon({ size:"24px", fill: color, stroke: '#595959' })}
    <div
      css={`
        margin-left: 5px;
      `}>
      <b>{label}</b>
    </div>
  </div>
)
const Legend = ({ networkStyle = 'functional' }) => (
  <div
    css={`
      display: flex;
      flex-flow: column nowrap;
    `}>
    <h3 style={{ color: 'grey' }}>Legend</h3>
    {legends[networkStyle].map((item, i) => (
      <Item key={i} {...item} />
    ))}
    <Item icon={() => <Circle />} color="white" label="Protein" />
    <Item icon={() => <Triangle />} color="white" label="ncRNA" />
  </div>
)

export default Legend

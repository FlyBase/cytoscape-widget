import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

// CSS dependencies for the antd Radio button.
import 'antd/dist/antd.css'

/**
 * Component for allowing users to change the network visualization between
 * pathway and functional.
 *
 * Also see https://ant.design/components/radio/
 *
 * @param handleOnClick - Event handler that is called when a layout button is clicked.
 * @returns {*} - Radio buttons for switching between pathway and functional views.
 */
const LayoutControl = ({ handleOnClick = () => {} }) => (
  <div>
    <Radio.Group
      defaultValue="pathway"
      size="large"
      buttonStyle="solid"
      onChange={e => handleOnClick(e.target.value)}>
      <Radio.Button value="pathway">Pathway</Radio.Button>
      <Radio.Button value="functional">Functional</Radio.Button>
    </Radio.Group>
  </div>
)

LayoutControl.propTypes = {
  handleOnClick: PropTypes.func,
}

export default LayoutControl

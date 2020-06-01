import React from 'react'
import PropTypes from 'prop-types'

/**
 * Component for allowing users to change the network visualization between
 * pathway and functional.
 *
 * @param current - The current network style.
 * @param handleOnClick - Event handler that is called when a layout button is clicked.
 * @returns {*} - Radio buttons for switching between pathway and functional views.
 */
const LayoutControl = ({ current = 'pathway', handleOnClick = () => {} }) => (
  <div onClick={e => handleOnClick(e?.target?.value ?? 'pathway')}>
    <button
      className={`btn ${current === 'pathway' ? 'btn-primary' : 'btn-default'}`}
      title="Pathway"
      value="pathway">
      Pathway
    </button>
    <button
      style={{ marginLeft: '5px' }}
      className={`btn ${
        current === 'functional' ? 'btn-primary' : 'btn-default'
      }`}
      title="Functional"
      value="functional">
      Functional
    </button>
  </div>
)

LayoutControl.propTypes = {
  current: PropTypes.string,
  handleOnClick: PropTypes.func,
}

export default LayoutControl

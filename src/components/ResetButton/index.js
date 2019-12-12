import React from 'react'
import PropTypes from 'prop-types'

/**
 * Refresh button component
 * @param onClick - Event handler to execute when the button is clicked.
 * @returns {*} - The refresh button component
 */
const ResetButton = ({ onClick }) => (
  <button className="btn btn-danger" title="reset" onClick={onClick}>
    Reset
  </button>
)

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ResetButton

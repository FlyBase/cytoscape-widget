import React from 'react'
import PropTypes from 'prop-types'

const LayoutControl = ({ handleOnClick = () => {} }) => (
  <div>
    <button onClick={() => handleOnClick('functional')}>Functional</button>
    <button onClick={() => handleOnClick('pathway')}>Pathway</button>
  </div>
)

LayoutControl.propTypes = {
  onClick: PropTypes.func,
}

export default LayoutControl

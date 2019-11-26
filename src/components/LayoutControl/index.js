import React from 'react'
import PropTypes from 'prop-types'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import ToggleButton from 'react-bootstrap/lib/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/lib/ToggleButtonGroup'

const LayoutControl = ({ handleOnClick = () => {} }) => (
  <div>
    <ButtonToolbar>
      <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
        <ToggleButton value={2}>Radio 2</ToggleButton>
        <ToggleButton value={3}>Radio 3</ToggleButton>
      </ToggleButtonGroup>
    </ButtonToolbar>
    <button onClick={() => handleOnClick('functional')}>Functional</button>
    <button onClick={() => handleOnClick('pathway')}>Pathway</button>
  </div>
)

LayoutControl.propTypes = {
  onClick: PropTypes.func,
}

export default LayoutControl

import React from 'react'
import PropTypes from 'prop-types'
import { Radio } from 'antd'

import 'antd/dist/antd.css'

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
  onClick: PropTypes.func,
}

export default LayoutControl

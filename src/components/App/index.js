import React, { useState } from 'react'
import LayoutControl from '../LayoutControl'
import CytoscapeContainer from '../CytoscapeContainer'

import { normalizeElements } from 'react-cytoscapejs'

// TODO temporary data and style import.  Replace with API call.
import cytoscapeNetwork from './hh_sp'
import functionsStyle from './functions-style'
import pathwaysStyle from './pathways-style'

const App = () => {
  const [layout, setLayout] = useState('functional')

  return (
    <div>
      <LayoutControl handleOnClick={newLayout => setLayout(newLayout)} />
      <CytoscapeContainer
        style={functionsStyle.style}
        elements={normalizeElements(cytoscapeNetwork.elements)}
      />
    </div>
  )
}
export default App

import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const PrentComponent = () => {
    const [state, setState] = useState('Initial State')
    return (
        <div>
            state:{state};
            <ChildComponent updateParentState={setState} />
        </div>
    )
}

export default PrentComponent
/**
 * Exploring Child Components and State Management
 */

import React, { useState } from 'react'
const ChildComponent = ({ updateParentState }) => {

    return (
        <div>
            <button onClick={() => updateParentState('New State')}>
                Update Parent State
            </button>
        </div>
    )
}

export default ChildComponent
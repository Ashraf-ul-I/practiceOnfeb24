import React from 'react'
import CountContext from './CountContext'

const CountContextProvider = ({ children }) => {
    const [count, setCount] = React.useState(0);
    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    )
}

export default CountContextProvider
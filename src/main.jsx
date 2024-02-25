import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ConditionalRendaring from './components/ConditionalRendaring.jsx'
import CountContextProvider from './context/CountContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CountContextProvider>
    <App />
    {/* <ConditionalRendaring /> */}
  </CountContextProvider>,

)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

import Component2 from './components/Component2.jsx'
import Component3 from './components/Component3.jsx'
import IndianFlag from './components/IndianFlag.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> 
    
    <Component2></Component2>
    <Component3></Component3> 
    <IndianFlag></IndianFlag> 
  </StrictMode>,
)

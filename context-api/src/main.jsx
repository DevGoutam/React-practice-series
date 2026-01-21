import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AppContextProvider from "./context/AppContext.jsx"
import App from './App.jsx'
import React from 'react'


createRoot(document.getElementById('root')).render(
 <AppContextProvider>

    <App />
 </AppContextProvider>

)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';
import ShopContextProvider from './Context/ShopContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ShopContextProvider>
      <App />
    </ShopContextProvider>
  </React.StrictMode>,
)

import ReactDOM from 'react-dom/client'
import React from 'react'
import { RouterProvider } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'

import router from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
            <ParallaxProvider>
        <RouterProvider router={router}/>
        </ParallaxProvider>
           
        </React.StrictMode>
)

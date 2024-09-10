import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './src/App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './src/components/Home.jsx'
import CountryDetails from './src/components/CountryDetails.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path:  '/',
                element: <Home />
            },
            {
                path:  '/contact',
                element: <h1>Contact US</h1>
            },
            {
                path:  '/:country',
                element: <CountryDetails />
            }
        ],
    },
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<RouterProvider router={router} />)
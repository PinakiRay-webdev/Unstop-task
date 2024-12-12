import React from 'react'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import Login from './Authentication/Login'
import Home from './Pages/Home/Home'
const App = () => {

  const endpoints = createBrowserRouter([
    {
      path : '/',
      element : <><Home/></>
    },
    {
      path : '/login',
      element : <><Login/></>
    }
  ])

  return (
    <div>
      <RouterProvider router={endpoints}></RouterProvider>
    </div>
  )
}

export default App

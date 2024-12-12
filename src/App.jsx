import React from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login";
import Home from "./Pages/Home/Home";
const App = () => {

  //developing here a router protection so that no one can access the home page via url params with out login.
  const getUser = JSON.parse(localStorage.getItem('userCredentials'));
  const isAuthenticated = getUser ? true : false;
  
  const ProtectedRoute = () =>{
    return isAuthenticated ? <Outlet/> : <Navigate to="/login"/>
  }

  const endpoints = createBrowserRouter([
    {
      path: "/",
      element : <ProtectedRoute/>,
      children : [
        {
          path : '/',
          element : <Home/>
        }
      ]
    },
    {
      path: "/login",
      element: (
        <>
          <Login />
        </>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={endpoints}></RouterProvider>
    </div>
  );
};

export default App;

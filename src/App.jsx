import React from "react";
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Login from "./Authentication/Login";
import Home from "./Pages/Home/Home";
const App = () => {

  //developing here a router protection so that no one can access the home page via url params with out login.
  
  const ProtectedRoute = () =>{
    const getUser = JSON.parse(localStorage.getItem('userCredentials'));
    const isAuthenticated = getUser ? true : false;
    return isAuthenticated ? <Outlet/> : <Navigate to="/auth/login"/>
  }

  const endpoints = createBrowserRouter([

    {
      path : '/',
      element : <Navigate to="/home" replace={true}/>   //here i'm changing the default (/) to (/home) as we have only two routes i.e /home and /auth/login. And if user is logged in it will take to home or else it will take to login page.
    },
    {
      path: "/home",
      element : <ProtectedRoute/>,
      children : [
        {
          path : '/home',
          element : <Home/>
        },
      ]
    },
    {
      path: "/auth/login",
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
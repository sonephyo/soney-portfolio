import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import React from 'react';

// Pages
import Mainpage from './views/MainPage/Mainpage';
import Error404 from './views/Error404/Error404';
import Project from './views/Projects/Project';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage />
  },
  {
    path: "/project",
    element: <Project />
  },
  {
    path: "*",
    element: <Error404 />
  }

])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

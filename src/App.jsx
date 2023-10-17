import { Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import React from 'react';

// Pages
import Mainpage from './views/MainPage/Mainpage';
import Error404 from './views/Error404/Error404';
import Project from './views/Projects/Project';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element = {<Mainpage />}/>
      <Route path='demo' element = {<Project />}/>
      <Route path='*' element = {<Error404 />}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App

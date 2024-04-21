import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import GithubRepo from './GithubRepo.jsx'
import RepoDetails from './RepoDetails.jsx'
import Page404 from './Page404.jsx'
import AppOutlet from './AppOutlet.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<GithubRepo />} errorElement={<Page404 />} />
      <Route path='/repodetails' element={<AppOutlet />}>
        <Route path=':id' element={<RepoDetails />} />
      </Route>
    </>
  )
);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RouterProvider router={router} />
  </React.StrictMode>
)

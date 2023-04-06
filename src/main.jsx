import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Books from './Components/Books'
import BookDetails from './Components/BookDetails'
import LoadingSpiner from './Components/LoadingSpiner'
import ErorElement from './Components/ErorElement'

const router = createBrowserRouter([
{
  path : '/',
  element : <App></App>,
  errorElement: <ErorElement/>,
  children : [
    {
      path:'/',
      element : <Home></Home>
    },
    {
      path : 'books',
      element : <Books></Books>,
      loader: () => fetch('https://api.itbook.store/1.0/new'),
    },
    {
      path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
    },
    {
      path : 'about',
      element: <About></About>
    },
    {
      path: 'loader',
      element: <LoadingSpiner />,
    },
  ]
},
{
  path : '/about',
  element:<p>about page</p>
}





])

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}></RouterProvider>
)

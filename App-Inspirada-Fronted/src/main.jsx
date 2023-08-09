import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home } from "./pages/Home/Home";
import { Header } from "./componentes/Header/Header";
import { Footer } from "./componentes/Footer/Footer";

const router = createBrowserRouter([
  {
    path : "/",
    element : <Home/>
  },
  {
    path : "/home",
    element : <Home />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>,
)

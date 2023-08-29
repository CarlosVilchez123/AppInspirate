import React from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import { Home } from "./pages/Home/Home";
import { Default } from "./pages/Default/Default";
import { Header } from "./componentes/Header/Header";
import { Footer } from "./componentes/Footer/Footer";
import { Ovpgs } from './pages/Ovpgs/Ovpgs';
import { NavBarSuperior} from './componentes/Menus/NavBarSuperior'

const router = createBrowserRouter([
      {
        path: "/",
        element: <Default/>
      },
      {
        path: "/home",
        element: <NavBarSuperior></NavBarSuperior>,

        children:  [
          {
            path : "/home/inicio",
            element : <Home />
          },
          {
            path:"/home/ovpgs",
            element : <Ovpgs />
          },
          {
            path:"/home/igirl",
            element : <Ovpgs />
          }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </React.StrictMode>,
)

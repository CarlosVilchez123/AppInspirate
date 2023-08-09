import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import { Home } from "./paginas/Home/Home";
import { Header } from "./componentes/Header/Header";
import { Footer } from "./componentes/Footer/Footer";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/home",
    element: <Home/>
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header></Header>
    <RouterProvider router={router} />
    <Footer></Footer>
  </React.StrictMode>
);
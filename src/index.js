import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import About from './pages/About';
import Home from './pages/Home';
import Contato from './pages/Contato'
import Matricula from './pages/Matricula'
import Projetos from './pages/Projetos'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aprovados from './pages/Aprovados';
import ComingSoon from './pages/ComingSoon';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/historia",
    element: <About />
  },
  {
    path: "/contato",
    element: <Contato />
  },
  {
    path: "/matricula",
    element: <Matricula />
  },
  {
    path: "/projetos",
    element: <Projetos />
  },
  {
    path: "/historia",
    element: <About />
  },
  {
    path: "/aprovados",
    element: <Aprovados />
  },
  {
    path: "/construcao",
    element: <ComingSoon />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>
);


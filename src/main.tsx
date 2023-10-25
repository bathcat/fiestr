import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes.tsx';
import { App } from './App.tsx';
import { ErrorPage } from './pages/error-page.tsx';

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    errorElement: <ErrorPage />,
    children: Object.values(routes),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

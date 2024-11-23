import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { App } from './components/App';
import { HomePage } from './pages/HomePage';
import { ReservationPage } from './pages/ReservationPage';
import './global.css';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/reservation', element: <ReservationPage /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);


createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} future={{ v7_startTransition: true }} />,
);

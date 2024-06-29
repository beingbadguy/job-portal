import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import LoginProvider from './Context.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login.jsx';
import Jobs from './components/Jobs.jsx';
import Create from './components/Create.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/jobs',
    element: <Jobs />,
  },
  {
    path: '/create',
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoginProvider>
      <RouterProvider router={router} />
    </LoginProvider>
  </React.StrictMode>
);

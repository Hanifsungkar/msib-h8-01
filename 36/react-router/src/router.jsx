import { createBrowserRouter, redirect } from 'react-router-dom'

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import People from './pages/People';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'people/:id',
        element: <People />
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
        loader: () => {
          if (!localStorage.access_token) {
            return redirect('/')
          }

          return null
        }
      },
    ]
  }
])

export default router
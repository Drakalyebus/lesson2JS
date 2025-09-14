import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'

import Register from './pages/Register/Register.jsx'
import Confirm from './pages/Confirm/Confirm.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Register />
  },
  {
    path: '/auth/confirm/:confirmCode',
    element: <Confirm />
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

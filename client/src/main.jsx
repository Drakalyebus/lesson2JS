import { createRoot } from 'react-dom/client'
import './index.css'
import MainLayout from './layouts/MainLayout/MainLayout'
import Breeds from './pages/Breeds/Breeds'
import { createBrowserRouter, RouterProvider } from 'react-router'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/breeds/:category',
        element: <Breeds />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

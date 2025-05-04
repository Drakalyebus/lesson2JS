import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';

import MainLayout from './layouts/MainLayout/MainLayout.jsx';

import Color from './pages/Color/Color.jsx';
import Main from './pages/Main/Main.jsx';
import Todo from './pages/Todo/Todo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Main />
      },
      {
        path: "/todo",
        element: <Todo />
      },
      {
        path: "/color",
        element: <Color />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
import { useRoutes } from 'react-router-dom'

import Home from './pages/Home/Home'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Login from './pages/Login/Login'
import Payment from './pages/Payment/Payment'
import MainLayout from './layouts/MainLayout/MainLayout'

export const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout />,

      children: [
        {
          path: '/',
          element: <Home />,
          index: true
        },
        {
          path: '/login',
          element: <Login />
        },

        {
          path: '/payment',
          element: <Payment />
        }
      ]
    },
    {
      path: '*',

      element: <NotFoundPage />
    }
  ])

  return routeElements
}

import { Outlet, useRoutes } from 'react-router-dom'

import Home from './pages/Home/Home'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Login from './pages/Login/Login'
import Payment from './pages/Payment/Payment'
import MainLayout from './layouts/MainLayout/MainLayout'
import Cart from './pages/Cart/Cart'
import CourseList from './pages/Courses/CourseList/CourseList'
import CourseDetail from './pages/Courses/CourseDetail/CourseDetail'
import MyCourses from './pages/MyCourses/MyCourses'

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
          path: '/cart',
          element: <Cart />
        },

        {
          path: '/courses',
          element: <Outlet />,

          children: [
            {
              path: '/courses/:level1Id',
              element: <CourseList></CourseList>,
              children: [
                {
                  path: '/courses/:level1Id/:level2Id',
                  element: <CourseList></CourseList>
                }
              ]
            }
          ]
        },
        {
          path: '/course',
          element: <Outlet />,

          children: [
            {
              path: '/course/:courseId',
              element: <CourseDetail />
            }
          ]
        },

        {
          path: '/my-courses',
          // element: <Navigate to='/my-courses/learning' />,
          element: <Outlet />,
          children: [
            {
              path: '/my-courses/learning',
              element: <MyCourses />
            }
          ]
        },

        {
          path: '/payment',
          element: <Payment />
        }
      ]
    },
    {
      path: '/instructor',
      element: <MainLayout />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return routeElements
}

import { Outlet, useRoutes } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Payment from './pages/Payment/Payment'
import MainLayout from './layouts/MainLayout/MainLayout'
import Cart from './pages/Cart/Cart'
import CourseList from './pages/Courses/CourseList/CourseList'
import CourseDetail from './pages/Courses/CourseDetail/CourseDetail'
import MyCourses from './pages/MyCourses/MyCourses'
import NotAuthHome from './pages/Home/NotAuthHome'
import AuthHome from './pages/Home/AuthHome'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'

export const useRouteElements = () => {
  const isAuthed = false
  const routeElements = useRoutes([
    {
      path: '/',
      element: <MainLayout />,

      children: [
        {
          path: '/',
          element: isAuthed ? <AuthHome /> : <NotAuthHome />,
          index: true
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
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
          element: <Outlet />,
          children: [
            {
              index: true,
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

import { Outlet, useRoutes } from 'react-router-dom'

import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Payment from './pages/Payment/Payment'
import MainLayout from './layouts/MainLayout/MainLayout'
import Cart from './pages/Cart/Cart'
import CourseDetail from './pages/Course/CourseDetail/CourseDetail'
import MyCourses from './pages/MyCourses/MyCourses'
import NotAuthHome from './pages/Home/NotAuthHome'
import AuthHome from './pages/Home/AuthHome'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import CourseSearch from './pages/Courses/CourseSearch/CourseSearch'
import LectureDetail from './pages/Course/LectureDetail/LectureDetail'
import InstructorLayout from './layouts/InstructorLayout/InstructorLayout'
import InstructorCourses from './pages/Instructor/Courses/InstructorCourses'
import InstructorCommunication from './pages/Instructor/Communication/InstructorCommunication'
import CourseCreate from './pages/Course/CourseCreate/CourseCreate'
import CourseManageLayout from './pages/Instructor/ManageCourse/CourseManageLayout'

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
              element: <CourseSearch />,
              children: [
                {
                  path: '/courses/:level1Id/:level2Id',
                  element: <CourseSearch />
                }
              ]
            },

            {
              path: '/courses/search',
              element: <CourseSearch />
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
            },

            {
              path: '/course/:courseId/learn/lecture/:lectureId',
              element: <LectureDetail />
            }
          ]
        },

        {
          path: '/home/my-course/learning',
          element: <Outlet />,
          children: [
            {
              index: true,
              path: '/home/my-course/learning',
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
      path: '/course/create',
      element: <CourseCreate />
    },

    {
      path: '/instructor',
      element: <InstructorLayout />,
      children: [
        {
          path: '/instructor/courses',
          element: <InstructorCourses />
        },
        {
          path: '/instructor/communication',
          element: <InstructorCommunication />
        }
      ]
    },
    {
      path: '/instructor/course/:courseId/manage/:content',
      element: <CourseManageLayout />
    },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return routeElements
}

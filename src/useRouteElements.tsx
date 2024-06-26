import { Outlet, useRoutes } from 'react-router-dom'

import InstructorLayout from './layouts/InstructorLayout/InstructorLayout'
import MainLayout from './layouts/MainLayout/MainLayout'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import Cart from './pages/Cart/Cart'
import CourseDetail from './pages/Course/CourseDetail/CourseDetail'
import LectureLearning from './pages/Course/LectureLearning/LectureLearning'
import CourseSearch from './pages/Courses/CourseSearch/CourseSearch'
import AuthHome from './pages/Home/AuthHome'
import NotAuthHome from './pages/Home/NotAuthHome'
import InstructorCommunication from './pages/Instructor/Communication/InstructorCommunication'
import InstructorCourses from './pages/Instructor/Courses/InstructorCourses'
import CourseManageLayout from './pages/Instructor/ManageCourse/CourseManage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import Payment from './pages/Payment/Payment'
import MyLearning from './pages/MyLearning/MyLearning'
import SettingsLayout from './layouts/SettingsLayout/SettingsLayout'
import EditAccount from './pages/User/EditAccount/EditAccount'
import EditPhoto from './pages/User/EditPhoto/EditPhoto'
import EditProfile from './pages/User/EditProfile/EditProfile'
import RegisterInstructor from './pages/Auth/RegisterInstructor/RegisterInstructor'
import CreateCourse from './pages/Course/CreateCourse/CreateCourse'

export const useRouteElements = () => {
  const isAuthed = true
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
          path: '/payment',
          element: <Payment />
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
            }
          ]
        },
        {
          path: '/my-courses/:type',
          element: <MyLearning />
        }
      ]
    },

    {
      path: '/user',
      element: <SettingsLayout />,

      children: [
        { path: 'edit-account', element: <EditAccount /> },
        { path: 'edit-profile', element: <EditProfile /> },
        { path: 'edit-photo', element: <EditPhoto /> }
      ]
    },

    {
      path: '/course/:courseId/learn/lecture',
      element: <LectureLearning />
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
      path: '/course/create',
      element: <CreateCourse />
    },

    {
      path: '/register-instructor',
      element: <RegisterInstructor />
    },

    {
      path: '*',
      element: <NotFoundPage />
    }
  ])

  return routeElements
}

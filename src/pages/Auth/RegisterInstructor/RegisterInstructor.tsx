import { userServiceApi } from '@/services/apis/userServiceApi'
import { useAppDispatch, useAppSelector } from '@/services/state/redux/store'
import { Button, Card, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

import styles from './RegisterInstructor.module.scss'
import { USER_ROLE } from '@/contants/user.constant'
import { toast } from 'react-toastify'
import { authSliceActions } from '@/services/state/redux/authSlice'

function RegisterInstructor() {
  const { user } = useAppSelector((state) => state.auth)

  console.log('user: ', user)

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [isLoadingURL, setIsLoadingURL] = useState(false)

  const [isLoadingVerify, setIsLoadingVerify] = useState(false)

  const [registerURL, setRegisterURL] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  console.log('registerURL: ', registerURL)

  // const handleLog = () => {
  //   const dataadsads = localStorage.getItem('data')
  //   // console.log('zzzzzzz: ', JSON.parse(dataadsads ?? ''))
  // }

  useEffect(() => {
    if (searchParams.get('return_url') && searchParams.get('key')) {
      console.log('iffff')

      try {
        const verifyRegisterInstructor = async () => {
          setIsLoadingVerify(true)

          const formData = {
            key: searchParams.get('key')
          }

          const data = await userServiceApi.verifyRegisterTeacher(formData)

          dispatch(authSliceActions.startLogin())

          console.log('Data: ', data)

          const dataString = JSON.stringify(data)
          localStorage.setItem('data', dataString)

          dispatch(
            authSliceActions.loginSuccess({
              user: data.data.user,
              token: data.data.token
            })
          )

          setIsLoadingVerify(false)
          toast('Register Instructor Successfully!', {
            type: 'success',
            autoClose: 500
          })
          setRegisterSuccess(true)
        }

        verifyRegisterInstructor()
      } catch (err) {
        console.log(err)
        toast.error('Somethings went wrong on server !')
      }
    } else {
      console.log('elseeeee')

      if (user?.role === USER_ROLE.INSTRUCTOR) {
        navigate('/instructor/courses')
        return
      }

      const fetchRegisterURL = async () => {
        setIsLoadingURL(true)
        const result = await userServiceApi.requestRegisterTeacher()
        setRegisterURL(result.data.link)
        setIsLoadingURL(false)
      }

      try {
        fetchRegisterURL()
      } catch (err) {
        console.log(err)
        toast.error('Somethings went wrong on server !')
      }
    }
  }, [])

  console.log('render')
  return (
    <div className={styles.registerInstructorWrapper}>
      {!registerSuccess ? (
        <div>
          <h2 className='ud-heading-xl'>Become to teacher ?</h2>
          <p>You need to link your card with us to become a teacher and to receive fees from the courses you create.</p>

          {isLoadingURL ? (
            <Button loading disabled color={'purple'}>
              <span>Link</span>
            </Button>
          ) : (
            <div>
              <NavLink to={registerURL}>
                <Button color={'purple'}>
                  <span>Click To Link Your Card</span>
                </Button>
              </NavLink>
            </div>
          )}
        </div>
      ) : (
        <Card
          style={{ width: '600px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          {isLoadingVerify ? (
            <Spin></Spin>
          ) : (
            <div className='verifySuccess'>
              <h3>Verify Successfully!</h3>
              <NavLink to='/instructor/courses'>Go To Instructor Courses</NavLink>
            </div>
          )}
        </Card>
      )}
    </div>
  )
}

export default RegisterInstructor

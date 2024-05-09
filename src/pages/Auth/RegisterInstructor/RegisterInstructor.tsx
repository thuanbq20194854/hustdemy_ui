import { userServiceApi } from '@/services/apis/userServiceApi'
import { useAppSelector } from '@/services/state/redux/store'
import { Button, Card, Spin } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom'

import styles from './RegisterInstructor.module.scss'
import { USER_ROLE } from '@/contants/user.constant'
import { toast } from 'react-toastify'

function RegisterInstructor() {
  const { user } = useAppSelector((state) => state.auth)

  console.log('user: ', user)

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [isLoadingURL, setIsLoadingURL] = useState(false)

  const [isLoadingVerify, setIsLoadingVerify] = useState(false)

  const [registerURL, setRegisterURL] = useState('')

  const [searchParams, setSearchParams] = useSearchParams()

  const navigate = useNavigate()

  useEffect(() => {
    if (searchParams.get('return_url') && searchParams.get('key')) {
      console.log('iffff')

      try {
        const verifyRegisterInstructor = async () => {
          setRegisterSuccess(true)

          setIsLoadingVerify(true)

          const formData = {
            key: searchParams.get('key')
          }

          await userServiceApi.verifyRegisterTeacher(formData)
          setIsLoadingVerify(false)
          toast('Register Instructor Successfully!', {
            type: 'success',
            autoClose: 500
          })
        }

        verifyRegisterInstructor()
      } catch (err) {
        console.log(err)
      }
    } else {
      console.log('elseeeee')

      const fetchRegisterURL = async () => {
        const result = await userServiceApi.requestRegisterTeacher()

        setRegisterURL(result.data.link)
      }

      try {
        setIsLoadingURL(true)
        fetchRegisterURL()
        setIsLoadingURL(false)
      } catch (err) {
        console.log('err')
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
            <Button loading color={'purple'}>
              <span>Link</span>
            </Button>
          ) : (
            <NavLink to={registerURL}>
              <Button color={'purple'}>
                <span>Click To Link Your Card</span>
              </Button>
            </NavLink>
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

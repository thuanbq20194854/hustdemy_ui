import { userServiceApi } from '@/services/apis/userServiceApi'
import { useAppSelector } from '@/services/state/redux/store'
import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function RegisterInstructor() {
  const { user } = useAppSelector((state) => state.auth)

  const [registerSuccess, setRegisterSuccess] = useState(false)

  const [isLoadingURL, setIsLoadingURL] = useState(false)

  const [registerURL, setRegisterURL] = useState('')

  useEffect(() => {
    setIsLoadingURL(true)
    // API get URL

    const requestRegisterInstructor = async () => {
      const result = await userServiceApi.requestRegisterTeacher()

      setRegisterURL(result.data.link)
    }
    //
    requestRegisterInstructor()

    setIsLoadingURL(false)
  }, [])
  return (
    <div>
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
                <span>Link</span>
              </Button>
            </NavLink>
          )}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}

export default RegisterInstructor

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'

import { useGoogleLogin } from '@react-oauth/google'
import { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ResponseLogin, SignIn, SignInByGoogle } from '../../../models/auth'
import { userServiceApi } from '../../../services/apis/userServiceApi'
import { authSliceActions } from '../../../services/state/redux/authSlice'
import { useAppDispatch } from '../../../services/state/redux/store'
import { setAuthTokenLS } from '../../../utils/utils'
import { schemeSignIn } from '../../../validators/auth'

function Login() {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const loginGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      // dispatch(authSliceActions.loginSuccess())
      console.log(tokenResponse)

      dispatch(authSliceActions.startLogin())

      const data: SignInByGoogle = {
        token: tokenResponse.access_token
      }
      const result = await userServiceApi.loginByGoogle(data)

      console.log('35 result: ', result)
      setAuthTokenLS(result.data.token)
      const payloadLogin: ResponseLogin = {
        token: result.data.token,
        user: result.data.user
      }
      dispatch(authSliceActions.loginSuccess(payloadLogin))
      navigate('/')

      toast('Login Sucessfully!', {
        autoClose: 500,
        draggable: false,
        type: 'success'
      })
    },
    onError: (err) => {
      console.log(err)
    }
  })

  const {
    register,
    handleSubmit,
    reset,

    formState: { errors }
  } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemeSignIn)
  })

  const [error, setError] = useState('')

  const onSubmit = async (formData: SignIn) => {
    try {
      dispatch(authSliceActions.startLogin())

      const returnData = await userServiceApi.login(formData)

      const responseData: ResponseLogin = returnData.data
      console.log(responseData)
      setAuthTokenLS(responseData.token)

      console.log('responseData: ', responseData)

      dispatch(authSliceActions.loginSuccess(responseData))

      reset()
      setError('')

      navigate('/')
      toast('Login Sucessfully!', {
        autoClose: 500,
        draggable: false,
        type: 'success'
      })
    } catch (err: any) {
      if (err.response.status === 204) {
        setError('This account has been blocked!')
      } else if (err.response.data.message.includes('Unauthorized')) {
        setError('Email or password is not correct!')
      } else {
        setError('Something went wrong on Server !')
      }
    }
  }
  return (
    <div className={styles.authPage}>
      <div className='authSection'>
        <div className='title ud-heading-md'>Log in to you Hustdemy Account</div>

        <button className='googleLoginBtn  ud-btn-large ud-btn-secondary ud-heading-md' onClick={() => loginGoogle()}>
          <FcGoogle />
          <span>Continue with Google</span>
        </button>
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputWrapper'>
            <div className='inputContainer'>
              <input placeholder='email' className='antInput' {...register('email')} />
              <div className='label'>Email</div>
            </div>
            {errors.email?.message ? <span className='errorMessage'>{errors.email?.message}</span> : <></>}
          </div>
          <div className='inputWrapper'>
            <div className='inputContainer'>
              <input placeholder='password' className='antInput' {...register('password')} />
              <div className='label'>Password</div>
            </div>
            {errors.password?.message ? <span className='errorMessage'>{errors.password?.message}</span> : <></>}
          </div>
          {error && (
            <div className='ud-form-note-validate-14' style={{ marginBottom: '8px' }}>
              {error}
            </div>
          )}

          <button className='signUpBtn ud-btn ud-btn-large ud-btn-brand ud-heading-md' type='submit'>
            <span>Login</span>
          </button>
        </form>

        <div className='helperAuth'>
          <div className='ud-text-md'>
            <span>
              or
              <NavLink to='/forgot-pasword' className='link ud-link-underline ud-text-bold'>
                Forgot Password
              </NavLink>
            </span>
          </div>

          <div className='seperator'></div>

          <div className='ud-text-sm'>
            <span>Don't have an account?</span>
            <NavLink className='link ud-link-underline ud-text-bold' to='/register'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

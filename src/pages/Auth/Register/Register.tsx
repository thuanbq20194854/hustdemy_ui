import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ResponseSignUp, SignUp } from '../../../models/auth'
import { userServiceApi } from '../../../services/apis/userServiceApi'
import { authSliceActions } from '../../../services/state/redux/authSlice'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'
import { schemeSignUp } from '../../../validators/auth'
import styles from './Register.module.scss'
import { useState } from 'react'
import { setAuthTokenLS } from '@/utils/utils'

export default function Register() {
  const navigate = useNavigate()
  const userState = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()

  // if (userState.isLoggedIn) {
  //   navigate('/')
  // } else {
  //   console.log('isAuth: ', userState.isLoggedIn)
  // }

  const {
    formState: { errors },
    register,
    handleSubmit,

    reset
  } = useForm<SignUp>({
    resolver: yupResolver(schemeSignUp),
    defaultValues: {
      email: '',
      name: '',
      password: ''
    }
  })

  const [error, setError] = useState('')

  const onSubmit = async (formData: SignUp) => {
    try {
      const data = await userServiceApi.register(formData)

      console.log('data: ', data)

      setAuthTokenLS(data.data.token)

      const responseData: ResponseSignUp = {
        token: data.token,
        user: data.user
      }
      dispatch(authSliceActions.signUp(responseData))

      reset()
      setError('')

      toast('Register Successfully!', {
        autoClose: 500,
        type: 'success'
      })

      navigate('/')
    } catch (err: any) {
      if (err.response.status === 422 && err.response.data.message.includes('Email already exists')) {
        setError('Email already exists')
      } else {
        setError('Something went wrong on Server !')
      }
    }
  }

  return (
    <div className={styles.authPage}>
      <div className='authSection'>
        <div className='title ud-heading-md'>Sign up and start learning</div>

        <form action='' className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='inputWrapper'>
            <div className='inputContainer'>
              <input placeholder='fullname' className='antInput' {...register('name')} />
              <div className='label'>Full name</div>
            </div>
            {errors.name?.message ? <span className='errorMessage'>{errors.name?.message}</span> : <></>}
          </div>

          <div className='inputWrapper'>
            <div className='inputContainer'>
              <input placeholder='email' className='antInput' {...register('email')} />
              <div className='label'>Email</div>
            </div>
            {errors.email?.message ? <span className='errorMessage'>{errors.email?.message}</span> : <></>}
          </div>

          <div className='inputWrapper'>
            <div className='inputContainer'>
              <input placeholder='password' className='antInput' {...register('password')} type='password' />
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
            <span>Sign up</span>
          </button>
        </form>

        <div className='helperAuth'>
          <div className='seperator'></div>

          <div className='ud-text-sm'>
            <span>Already have an account?</span>
            <NavLink className='link ud-link-underline ud-text-bold' to='/login'>
              Log in
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

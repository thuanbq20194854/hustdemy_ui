import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import styles from './Login.module.scss'

import { FcGoogle } from 'react-icons/fc'
import { NavLink } from 'react-router-dom'
import { useGoogleLogin } from '@react-oauth/google'
import { useAppDispatch } from '../../../services/state/redux/store'
import { authSliceActions } from '../../../services/state/redux/authSlice'
import { SignIn } from '../../../models/auth'
import { schemeSignIn } from '../../../validators/auth'

function Login() {
  const dispatch = useAppDispatch()
  const loginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      dispatch(authSliceActions.loginSuccess())
      console.log(tokenResponse)
    },
    onError: (err) => {
      console.log(err)
    }
  })

  const {
    register,
    handleSubmit,

    formState: { errors }
  } = useForm<SignIn>({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: yupResolver(schemeSignIn)
  })

  const onSubmit = (data: SignIn) => {
    console.log(data)
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
            <NavLink className='link ud-link-underline ud-text-bold' to='/sign-up'>
              Sign Up
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

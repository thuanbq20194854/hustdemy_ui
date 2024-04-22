import styles from './Register.module.scss'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'
import { NavLink, useNavigate } from 'react-router-dom'
import { authSliceActions } from '../../../services/state/redux/authSlice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignUp } from '../../../models/auth'
import { schemeSignUp } from '../../../validators/auth'

export default function Register() {
  const navigate = useNavigate()
  const userState = useAppSelector((state) => state.auth)

  const dispatch = useAppDispatch()

  if (userState.isLoggedIn) {
    navigate('/')
  } else {
    console.log('isAuth: ', userState.isLoggedIn)
  }

  const handleClick = () => {
    dispatch(authSliceActions.loginSuccess())
  }

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<SignUp>({
    resolver: yupResolver(schemeSignUp)
  })

  const onSubmit = (data: SignUp) => {
    console.log(data)

    // API
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

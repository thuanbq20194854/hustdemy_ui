import styles from './Register.module.scss'
import { useAppDispatch, useAppSelector } from '../../../services/state/redux/store'
import { useNavigate } from 'react-router-dom'
import { userSliceActions } from '../../../services/state/redux/userSlice'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { RegisterSchema, registerSchema } from '../../../validators/auth'

export default function Register() {
  const navigate = useNavigate()
  const userState = useAppSelector((state) => state.user)

  const dispatch = useAppDispatch()

  if (userState.isAuthenticated) {
    navigate('/')
  } else {
    console.log('isAuth: ', userState.isAuthenticated)
  }

  const handleClick = () => {
    dispatch(userSliceActions.loginSuccess())
  }

  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<RegisterSchema>({
    resolver: yupResolver(registerSchema)
  })

  const onSubmit = (data: RegisterSchema) => {
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
      </div>
    </div>
  )
}

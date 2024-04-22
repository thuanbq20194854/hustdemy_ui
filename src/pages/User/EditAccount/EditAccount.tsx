import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { ChangePassword } from '../../../models/auth'
import { schemeChangePassword } from '../../../validators/auth'
import styles from './EditAccount.module.scss'

function EditAccount() {
  const { register, handleSubmit } = useForm<ChangePassword>({
    defaultValues: {
      confirmPassword: '',
      currentPassword: '',
      newPassword: ''
    },

    resolver: yupResolver(schemeChangePassword)
  })

  const handleSubmitForm = (formData: ChangePassword) => {
    console.log(formData)
  }
  return (
    <div className={styles.editProfileWrapper}>
      <div className='contentHeader'>
        <div className='inner'>
          <h1 className='ud-heading-xl'>Account</h1>
          <p className='mt-8px ud-text-md'>Edit your account settings and change your password here.</p>
        </div>
      </div>

      <div className='contentBody'>
        <div className='um-section'>
          <div className='um-container'>
            <div className='ud-form-group'>
              <label htmlFor='email' className='ud-form-label ud-heading-sm'>
                Email:
              </label>

              <div className='edit-account-form--form-control-container'>
                <div className='edit-account-form--fake-input'>
                  <span>
                    Your email address is <b>thuanhehehehe@gmail.com</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='um-section'>
          <form action='' onSubmit={handleSubmit(handleSubmitForm)}>
            <div className='um-container'>
              <div className='ud-form-group'>
                <input
                  type='text'
                  className='ud-text-input ud-text-input-large ud-text-md'
                  placeholder='Enter new password'
                  {...register('newPassword')}
                />
              </div>
              <div className='ud-form-group'>
                <input
                  type='text'
                  className='ud-text-input ud-text-input-large ud-text-md'
                  placeholder='Re-type new password'
                  {...register('confirmPassword')}
                />
              </div>
              <div className='ud-footer-btns' style={{ textAlign: 'left' }}>
                <button type='submit' className='ud-btn ud-btn-large ud-btn-primary ud-heading-md'>
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditAccount

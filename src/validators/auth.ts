import * as Yup from 'yup'
import {
  ChangePassword,
  ForgotPassword,
  ResetPassword,
  SignIn,
  SignUp,
  UpdateAvatar,
  UpdateProfile
} from '../models/auth'

export const schemeSignUp: Yup.ObjectSchema<SignUp> = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(8, 'Name is less than 8 characters')
    .max(32, 'Name is more than 32 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Email is not valid')
    .max(40, 'Password is more than 40 characters'),
  password: Yup.string()
    .required('Password is required')
    .min(8, 'Password is less than 8 characters')
    .max(32, 'Password is more than 32 characters')
})

export const schemeSignIn: Yup.ObjectSchema<SignIn> = Yup.object({
  email: Yup.string().required('Email là bắt buộc').email('Email không hợp lệ'),
  password: Yup.string()
    .required('Mật khẩu là bắt buộc')
    .min(8, 'Mật khẩu nhỏ hơn 8 ký tự')
    .max(30, 'Mật khẩu lớn hơn 30 ký tự')
})

export const schemeForgotPassword: Yup.ObjectSchema<ForgotPassword> = Yup.object({
  email: Yup.string().required('Email là bắt buộc').email('Email không hợp lệ')
})

export const schemeResetPassword: Yup.ObjectSchema<ResetPassword> = Yup.object({
  password: Yup.string().required('Mật khẩu là bắt buộc').min(8, 'Mật khẩu nhỏ hơn 8 ký tự'),
  confirmPassword: Yup.string()
    .required('Mật khẩu xác thực là bắt buộc')
    .oneOf([Yup.ref('password')], 'Mật khẩu phải khớp')
})

export const schemeChangePassword: Yup.ObjectSchema<ChangePassword> = Yup.object({
  currentPassword: Yup.string().required('Mật khẩu hiển tại là bắt buộc').min(8, 'Mật khẩu hiển tại nhỏ hơn 8 ký tự'),
  newPassword: Yup.string().required('New password is required').min(8, 'New password is less than 8 characters'),
  confirmPassword: Yup.string()
    .required('Confirm new password is required')
    .oneOf([Yup.ref('newPassword')], 'New password must match')
})

const MAX_FILE_SIZE = 1024 * 1024 * 5 //5MB

const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

export const schemeUpdateImage: Yup.ObjectSchema<UpdateAvatar> = Yup.object({
  image: Yup.mixed<File>()
    .test(
      'fileFormat',
      'Không hỗ trợ định dạng',
      (file) =>
        !file || // Check if `file` is defined
        // file.length === 0 || // Check if `file` is not an empty list
        SUPPORTED_FORMATS.includes(file.type)
    )
    .test(
      'fileSize',
      'File is too large. Maximum 5 MB',
      (file) =>
        !file || // Check if `file` is defined
        // file.length === 0 || // Check if `files` is not an empty list
        file.size <= MAX_FILE_SIZE
    )
})

export const schemeUpdateProfile: Yup.ObjectSchema<UpdateProfile> = Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name is less than 2 characters')
    .max(30, 'Name is more than 30 characters'),
  headline: Yup.string().max(255, 'Headline is more than 255 characters'),
  biography: Yup.string().max(600, 'Biography is more than 600 characters'),
  twitter_url: Yup.string().max(255, 'Twitter URL is more than 255 characters'),
  facebook_url: Yup.string().max(255, 'Facebook URL is more than 255 characters'),
  youtube_url: Yup.string().max(255, 'Youtube URL is more than 255 characters'),
  website_url: Yup.string().max(255, 'Website URL is more than 255 characters'),
  linkedin_url: Yup.string().max(255, 'LinkedIn URL is more than 255 characters')
})

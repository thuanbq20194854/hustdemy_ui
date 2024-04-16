import * as Yup from 'yup'
import { UpdateAvatar, UpdateProfileForm } from '../models/auth'

export const registerSchema = Yup.object({
  name: Yup.string().required('Name is required').min(6, 'Length from 6 - 160').max(160, 'Length from 6 - 160'),
  email: Yup.string()
    .required('Email is required')
    .email('Email không đúng định dạng')
    .min(6, 'Length from 6 - 160')
    .max(160, 'Length from 6 - 160'),
  password: Yup.string().required('Password is required').min(6, 'Length from 6 - 160').max(160, 'Length from 6 - 160')
})
export const loginSchema = Yup.object({
  email: Yup.string()
    .required('Email is required')
    .email('Email không đúng định dạng')
    .min(6, 'Length from 6 - 160')
    .max(160, 'Length from 6 - 160'),
  password: Yup.string().required('Password is required').min(6, 'Length from 6 - 160').max(160, 'Length from 6 - 160')
})

// parse and assert validity
// const user = await userSchema.validate(await fetchUser())

export type RegisterSchema = Yup.InferType<typeof registerSchema>
export type LoginSchema = Yup.InferType<typeof loginSchema>
/* {
    name: string;
    age: number;
    email?: string | undefined
    website?: string | null | undefined
    createdOn: Date
  }
  */

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

export const schemaUpdateProfile: Yup.ObjectSchema<UpdateProfileForm> = Yup.object({
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

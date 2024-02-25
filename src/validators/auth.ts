import * as Yup from 'yup'

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

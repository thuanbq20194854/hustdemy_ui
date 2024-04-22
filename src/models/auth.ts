export interface SignUp {
  name: string
  email: string
  password: string
}

export interface SignIn {
  email: string
  password: string
}

export interface SignInByGoogle {
  token: string
}

export interface ForgotPassword {
  email: string
}

export interface ResetPassword {
  password: string
  confirmPassword: string
}

export interface ResetPasswordRequest {
  email_token: string
  password: string
}

export interface ResponseLogin {
  token: string
  user: User
}

export interface ResponseSignUp {
  token: string
  user: User
}

export interface ResponseUpdateProfile {
  user: User
}

export interface User {
  id: number
  email: string
  name: string
  type_account: number
  avatar: string | null
  headline: string | null
  biography: string | null
  website_url: string | null
  twitter_url: string | null
  facebook_url: string | null
  linkedin_url: string | null
  youtube_url: string | null
  role: number
  account_stripe_id: string | null
  account_stripe_status: number | null
  updated_at: string
  created_at: string
}

export interface ChangePassword {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export interface ResetChangePasswordRequest {
  old_password: string
  new_password: string
}

export interface UpdateAvatar {
  image?: File
}

export interface UpdateProfile {
  name: string
  headline?: string
  biography?: string
  twitter_url?: string
  facebook_url?: string
  linkedin_url?: string
  youtube_url?: string
  website_url?: string
}

// export interface CreateCourse {
//     title: string;
//     category_id: number;
//     sub_category_id: number;
// }

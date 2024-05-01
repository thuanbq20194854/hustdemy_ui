import https from '../../utils/https'
import { SignIn, SignInByGoogle, SignUp } from '../../models/auth'
export const userServiceApi = {
  register: (data: SignUp): Promise<any> => {
    const url = '/auth/register'
    return https.post(url, data)
  },

  login: (data: SignIn): Promise<any> => {
    const url = '/auth/login'
    return https.post(url, data)
  },
  loginByGoogle: (data: SignInByGoogle): Promise<any> => {
    const url = '/auth/login-google'
    return https.post(url, data)
  }
}

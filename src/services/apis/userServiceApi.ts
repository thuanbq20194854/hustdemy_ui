import https from '../../utils/https'
import { SignIn, SignUp } from '../../models/auth'
export const userServiceApi = {
  register: (data: SignUp): Promise<any> => {
    const url = '/auth/register'
    return https.post(url, data)
  },

  login: (data: SignIn): Promise<any> => {
    const url = '/auth/login'
    return https.post(url, data)
  }
}

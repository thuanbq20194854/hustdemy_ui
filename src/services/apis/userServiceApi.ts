import https from '../../utils/https'
import { SignUp } from '../../models/auth'
export const userServiceApi = {
  register: (data: SignUp): Promise<any> => {
    const url = '/auth/register'
    return https.post(url, data)
  }
}

import axios from 'axios'
import { clearAuthTokenLS, getAuthTokenLS } from './utils'

const https = axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
})

https.interceptors.request.use(
  (config) => {
    const token = getAuthTokenLS()

    config.headers.Authorization = `Bearer ${token}`

    return config
  },

  (error) => {
    return Promise.reject(error)
  }
)

https.interceptors.response.use(
  (response) => {
    return response.data
  },

  (error) => {
    if (error.response.status === 401 && error.response.config.url != '/login') {
      clearAuthTokenLS()
      localStorage.clear()

      window.location.href = 'login'
    }
    return Promise.reject(error)
  }
)

// class Http {
//   instance: AxiosInstance

//   constructor() {
//     this.instance = axios.create({
//       baseURL: 'http://127.0.0.1:3000/api',
//       // timeout: 10000,
//       headers: {
//         'Content-Type': 'application/json',
//         'expire-access-token': 60 * 60 * 24, // 1 ngày
//         'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
//       }
//     })

//     this.instance.interceptors.request.use(
//       (config) => {
//         if (config.headers && this.accessToken) {
//           config.headers.authorization = `Bearer ${this.accessToken}`
//         }

//         return config
//       },
//       (error: AxiosError) => {
//         return Promise.reject(error)
//       }
//     )

//     this.instance.interceptors.response.use(
//       (response) => {
//         if (response.config.url === '/login') {
//           const data = response.data

//           this.accessToken = data.data.access_token
//           this.refreshToken = data.data.refresh_token
//         }
//         return response
//       },

//       (error: AxiosError) => {
//         const config = error.response?.config || { url: '', headers: {} }
//         // 1 Toast Error not 422 and 401

//         if (error.response?.status != 401 && error.response?.status != 422) {
//         }
//         // toast.error()

//         // If Authentication Erorr
//         if (error.response?.status === 401) {
//           //If URL != refreshToken API
//           if (error.config?.url !== '/refreshToken') {
//             this.refreshTokenRequest = this.refreshTokenRequest
//               ? this.refreshTokenRequest
//               : this.handleTokenRefresh().finally(() => {
//                   setTimeout(() => {
//                     this.refreshTokenRequest = null
//                   }, 10000)
//                 })

//             return this.refreshTokenRequest.then((accessToken) =>
//               this.instance({
//                 ...config,
//                 headers: {
//                   ...config.headers,
//                   authorization: `Bearer ${accessToken}`
//                 }
//               })
//             )
//           }

//           // If URL ==== refreshToken API
//           this.accessToken = ''
//           this.refreshToken = ''
//           clearTokenLS()
//         }

//         return Promise.reject(error)
//       }
//     )
//   }

//   private handleTokenRefresh() {
//     return this.instance
//       .post<any>('/refreshToken', {
//         refresh_token: this.refreshToken
//       })
//       .then((res) => {
//         const { access_token } = res.data.data

//         setAccessTokenLS(access_token)
//         this.accessToken = access_token

//         return access_token
//       })
//       .catch((err) => {
//         throw err
//       })
//   }
// }

export default https

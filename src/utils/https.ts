import axios, { AxiosError, AxiosInstance } from 'axios'
import { clearTokenLS, getAccessTokenLS, getRefreshTokenLS, setAccessTokenLS } from './utils'

class Http {
  instance: AxiosInstance

  private accessToken: string

  private refreshToken: string

  private refreshTokenRequest: Promise<string> | null

  constructor() {
    ;(this.accessToken = getAccessTokenLS()),
      (this.refreshToken = getRefreshTokenLS()),
      (this.refreshTokenRequest = null),
      (this.instance = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 10000,
        headers: {
          'Content-Type': 'application/json',
          'expire-access-token': 60 * 60 * 24, // 1 ngày
          'expire-refresh-token': 60 * 60 * 24 * 160 // 160 ngày
        }
      }))

    this.instance.interceptors.request.use(
      (config) => {
        if (config.headers && this.accessToken) {
          config.headers.authorization = `Bearer ${this.accessToken}`
        }

        return config
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        if (response.config.url === '/login') {
          const data = response.data

          this.accessToken = data.data.access_token
          this.refreshToken = data.data.refresh_token
        }
        return response
      },

      (error: AxiosError) => {
        const config = error.response?.config || { url: '', headers: {} }
        // 1 Toast Error not 422 and 401

        // If Authentication Erorr
        if (error.response?.status === 401) {
          //If URL != refreshToken API
          if (error.config?.url !== '/refreshToken') {
            this.refreshTokenRequest = this.refreshTokenRequest
              ? this.refreshTokenRequest
              : this.handleTokenRefresh().finally(() => {
                  setTimeout(() => {
                    this.refreshTokenRequest = null
                  }, 10000)
                })

            return this.refreshTokenRequest.then((accessToken) =>
              this.instance({
                ...config,
                headers: {
                  ...config.headers,
                  authorization: `Bearer ${accessToken}`
                }
              })
            )
          }

          // If URL ==== refreshToken API
          this.accessToken = ''
          this.refreshToken = ''
          clearTokenLS()
        }

        Promise.reject(error)
      }
    )
  }

  private handleTokenRefresh() {
    return this.instance
      .post<any>('/refreshToken', {
        refresh_token: this.refreshToken
      })
      .then((res) => {
        const { access_token } = res.data.data

        setAccessTokenLS(access_token)
        this.accessToken = access_token

        return access_token
      })
      .catch((err) => {
        throw err
      })
  }
}

export default new Http().instance

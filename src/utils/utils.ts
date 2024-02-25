export function getAccessTokenLS() {
  return localStorage.getItem('accessToken') || ''
}

export function setAccessTokenLS(token: string) {
  localStorage.setItem('accessToken', token)
}
export function getRefreshTokenLS() {
  return localStorage.getItem('refreshToken') || ''
}

export function setRefreshTokenLS(token: string) {
  localStorage.setItem('refreshToken', token)
}

export function clearTokenLS() {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}

export function getAuthTokenLS() {
  return localStorage.getItem('token') || ''
}

export function setAuthTokenLS(token: string) {
  localStorage.setItem('token', token)
}

export function clearAuthTokenLS() {
  localStorage.removeItem('token')
}

export const uuid = () => (String(Date.now().toString(32)) + Math.random().toString(16)).replace(/\./g, '')

export const randomNumber = () => {
  return Number(Date.now())
}

import axios, { type AxiosInstance, AxiosError } from 'axios'
import { useAuthStore } from '@/stores/auth'

const BASE_URL = API_BASE_URL

const api: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // Pour les cookies JWT
  timeout: 15000, // 15 seconds
  headers: {
    'Content-Type': 'application/json',
  },
})

// Intercepteur pour les erreurs 401
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      // Ne pas appeler logout() HTTP ici : évite les boucles et les appels inutiles (ex. /auth/me).
      authStore.clearSession()
    }
    return Promise.reject(error)
  }
)

export default api
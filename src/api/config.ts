import axios from 'axios'

const apiClient = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 5000
})

apiClient.interceptors.request.use(
  (config) => {
    // localStorage에서 토큰을 가져옵니다. (또는 다른 저장소)
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default apiClient

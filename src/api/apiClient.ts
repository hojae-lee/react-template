import apiClient from './config.ts'

export const getRequest = async (url: string, params?: any) => {
  try {
    const response = await apiClient.get(url, { params })
    return response.data
  } catch (error) {
    console.error('GET request failed:', error)
    throw error
  }
}

export const postRequest = async (url: string, data?: any) => {
  try {
    const response = await apiClient.post(url, data)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}

export const updateRequest = async (url: string, data?: any) => {
  try {
    const response = await apiClient.put(url, data)
    return response.data
  } catch (error) {
    console.error('PUT request failed:', error)
    throw error
  }
}

export const deleteRequest = async (url: string, params?: any) => {
  try {
    const response = await apiClient.delete(url, { params })
    return response.data
  } catch (error) {
    console.error('DELETE request failed:', error)
    throw error
  }
}

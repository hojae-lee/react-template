import apiClient from './config.ts'

interface RequestParams {
  url: string
  params?: Record<string, any>
  data?: any
}

export const getRequest = async ({ url, params }: RequestParams) => {
  try {
    const response = await apiClient.get(url, { params })
    return response.data
  } catch (error) {
    console.error('GET request failed:', error)
    throw error
  }
}

export const postRequest = async ({ url, data }: RequestParams) => {
  try {
    const response = await apiClient.post(url, data)
    return response.data
  } catch (error) {
    console.error('POST request failed:', error)
    throw error
  }
}

export const updateRequest = async ({ url, data }: RequestParams) => {
  try {
    const response = await apiClient.put(url, data)
    return response.data
  } catch (error) {
    console.error('PUT request failed:', error)
    throw error
  }
}

export const deleteRequest = async ({ url, params }: RequestParams) => {
  try {
    const response = await apiClient.delete(url, { params })
    return response.data
  } catch (error) {
    console.error('DELETE request failed:', error)
    throw error
  }
}

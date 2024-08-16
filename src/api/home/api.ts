import { getRequest, postRequest, updateRequest, deleteRequest } from '@/api/apiClient.ts'

export const getUsers = () => {
  const url = '/api/users'
  const fetcher = () => getRequest(url)
  return { url, fetcher }
}

export const getUserById = (userId: string) => {
  const url = `/api/users/${userId}`
  const fetcher = (params?: any) => getRequest(url, params)
  return { url, fetcher }
}

export const createUser = () => {
  const url = '/api/users'
  const fetcher = (userData: any) => postRequest(url, userData)
  return { url, fetcher }
}

export const updateUser = (userId: string) => {
  const url = `/api/users/${userId}`
  const fetcher = (userData: any) => updateRequest(url, userData)
  return { url, fetcher }
}

export const deleteUser = (userId: string) => {
  const url = `/api/users/${userId}`
  const fetcher = () => deleteRequest(url)
  return { url, fetcher }
}

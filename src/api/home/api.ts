import { getRequest, postRequest, updateRequest, deleteRequest } from '../apiClient.ts'

export const getUsers = async () => {
  return await getRequest('/users')
}

export const getUserById = async (userId: string) => {
  return await getRequest(`/users/${userId}`)
}

export const createUser = async (userData: any) => {
  return await postRequest('/users', userData)
}

export const updateUser = async (userId: string, userData: any) => {
  return await updateRequest(`/users/${userId}`, userData)
}

export const deleteUser = async (userId: string) => {
  return await deleteRequest(`/users/${userId}`)
}

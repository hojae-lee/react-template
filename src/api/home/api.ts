import { getRequest, postRequest, updateRequest, deleteRequest } from '../apiClient.ts'

export const getUsers = async () => {
  return await getRequest({ url: '/users' })
}

export const getUserById = async (userId: string) => {
  return await getRequest({ url: `/users/${userId}` })
}

export const createUser = async (userData: any) => {
  return await postRequest({ url: '/users', data: userData })
}

export const updateUser = async (userId: string, userData: any) => {
  return await updateRequest({ url: `/users/${userId}`, data: userData })
}

export const deleteUser = async (userId: string) => {
  return await deleteRequest({ url: `/users/${userId}` })
}

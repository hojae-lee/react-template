import useSWRImmutable from 'swr/immutable'

import { getUsers } from '@/api/home/api.ts'
import { UserType } from '@/entities/home/types/index.ts'

const useReadUsersDataHook = () => {
  const { url, fetcher } = getUsers()
  const { data, error } = useSWRImmutable<UserType[]>(url, fetcher)

  return {
    data,
    error
  }
}

export default useReadUsersDataHook

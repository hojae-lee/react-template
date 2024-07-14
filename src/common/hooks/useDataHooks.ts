import useSWR, { SWRResponse, SWRConfiguration } from 'swr'
import useSWRImmutable from 'swr/immutable'

type FetcherFn<Data> = (url: string) => Promise<Data>

/** useSWR 전용 데이터 패칭 훅 */
export const useSWRFetch = <Data = any, Error = any>(
  url: string,
  fetcher: FetcherFn<Data>,
  options?: SWRConfiguration<Data, Error>
): Omit<SWRResponse<Data, Error>, 'isLoading'> => {
  const { data, error, isValidating, mutate } = useSWR<Data, Error>(url, fetcher, options)

  return {
    data,
    error,
    isValidating,
    mutate
  }
}

/** useSWRImmutable 전용 데이터 패칭 훅 */
export const useSWRImmutableFetch = <Data = any, Error = any>(
  url: string,
  fetcher: FetcherFn<Data>,
  options?: SWRConfiguration<Data, Error>
): Omit<SWRResponse<Data, Error>, 'isLoading'> => {
  const { data, error, isValidating, mutate } = useSWRImmutable<Data, Error>(url, fetcher, options)

  return {
    data,
    error,
    isValidating,
    mutate
  }
}

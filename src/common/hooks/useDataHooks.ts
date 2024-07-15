import useSWR, { SWRResponse, SWRConfiguration } from 'swr'
import useSWRImmutable from 'swr/immutable'

type FetcherFn<Data> = (url: string) => Promise<Data>

/** useSWR 전용 데이터 패칭 훅 */
export const useSWRFetch = <Data = any, Error = any>(
  url: string,
  fetcher: FetcherFn<Data>,
  options?: SWRConfiguration<Data, Error>
): SWRResponse<Data, Error> => {
  return useSWR<Data, Error>(url, fetcher, options)
}

/** useSWRImmutable 전용 데이터 패칭 훅 */
export const useSWRImmutableFetch = <Data = any, Error = any>(
  url: string,
  fetcher: FetcherFn<Data>,
  options?: SWRConfiguration<Data, Error>
): SWRResponse<Data, Error> => {
  return useSWRImmutable<Data, Error>(url, fetcher, options)
}

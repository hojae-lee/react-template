import useSWR from 'swr'

interface FetcherFn<R> {
  (url: string): Promise<R>
}

export const useDataFetch = <Data = any, Error = any>(url: string, fetcher: FetcherFn<Data>, options?: any) => {
  const { data, error, mutate } = useSWR<Data, Error>(url, fetcher, options)

  return {
    data,
    error,
    mutate
  }
}

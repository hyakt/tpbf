import useSWRImmutable from 'swr/immutable'

export type Prefecture = {
  prefCode: number
  prefName: string
}

// ref: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
export type APIResult = {
  result: Prefecture[]
}

export const usePrefectures = () => {
  const { data, error } = useSWRImmutable<APIResult, unknown>(
    `/api/resas/prefectures`
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

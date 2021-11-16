import useSWR from 'swr'

// ref: https://opendata.resas-portal.go.jp/docs/api/v1/prefectures.html
export type ResasAPIResult = {
  result: { prefCode: number; prefName: string }[]
}

export const usePrefectures = () => {
  const { data, error } = useSWR<ResasAPIResult, unknown>(
    `/api/resas/prefectures`
  )

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  }
}

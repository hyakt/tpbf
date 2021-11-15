import useSWR, { SWRResponse } from 'swr'

type ResasAPIResult = {
  result: Record<string, unknown>[]
}

export const useResasAPI = (
  name: string
): SWRResponse<ResasAPIResult, unknown> => {
  const data = useSWR(`/api/resas/${name}`)
  return data
}

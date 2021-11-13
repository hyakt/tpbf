import useSWR from 'swr'

export const useResasAPI = (name: string) => {
  const data = useSWR(`/api/resas/${name}`)
  return data
}

export const fetchResas = (path: string) => {
  const { API_RESAS_URL, API_RESAS_KEY } = process.env
  return fetch(`${API_RESAS_URL}/api/v1/${path}`, {
    headers: {
      'X-API-KEY': API_RESAS_KEY,
    },
  })
}

import { NextApiRequest, NextApiResponse } from 'next'

const resas = async (req: NextApiRequest, res: NextApiResponse) => {
  const { API_RESAS_URL, API_RESAS_KEY } = process.env
  const { name } = req.query
  try {
    const response = await fetch(`${API_RESAS_URL}/api/v1/${name}`, {
      headers: {
        'X-API-KEY': API_RESAS_KEY,
      },
    })
    const data = await response.json()
    res.status(response.status).json({ ...data })
  } catch (e) {
    res.status(500).json({ message: e })
  }
}

export default resas

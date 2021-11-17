import { NextApiRequest, NextApiResponse } from 'next'
import { fetchResas } from '../../../data/fetch-resas'

const resas = async (req: NextApiRequest, res: NextApiResponse) => {
  const path = req.url.replace('/api/resas/', '')

  try {
    const response = await fetchResas(path)
    const data: Record<string, unknown> | string = await response.json()

    if (response.status === 200) {
      if (data === '400') {
        res.status(400)
      }
      if (data instanceof Object) {
        if (typeof data.statusCode === 'string') {
          res.status(Number(data.statusCode)).json({ ...data })
        } else {
          res.status(response.status).json({ ...data })
        }
      }
    }
    res.status(500).json({ message: 'unexpected error occured' })
  } catch (e) {
    res.status(500).json({ message: e })
  }
}

export default resas

import { rest } from 'msw'
import { setupServer } from 'msw/node'

export const prefecturesResponse = {
  result: [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ],
}

export const mockServer = setupServer(
  rest.get('/api/resas/prefectures', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(prefecturesResponse))
  })
)

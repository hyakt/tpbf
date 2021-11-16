import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { APIResult as PrefectureAPIResult } from '../api/use-prefectures'
import { APIResult as PopulationAPIResult } from '../api/fetch-population-trends'

export const prefecturesResponse: PrefectureAPIResult = {
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

export const populationResponse: PopulationAPIResult = {
  result: {
    boundaryYear: 2015,
    data: [
      {
        label: '総人口',
        data: [
          {
            year: 1900,
            value: 100,
          },
          {
            year: 1910,
            value: 200,
          },
        ],
      },
    ],
  },
}

export const mockServer = setupServer(
  rest.get('/api/resas/prefectures', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(prefecturesResponse))
  }),
  rest.get('/api/resas/population/composition/perYear', (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(populationResponse))
  })
)

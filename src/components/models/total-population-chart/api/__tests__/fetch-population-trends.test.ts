import { fetchPopulationTrends } from '../fetch-population-trends'
import { mockServer } from '../../__mocks__/resas'

beforeAll(() => mockServer.listen())
afterAll(() => mockServer.close())
afterEach(() => mockServer.resetHandlers())

it('return values', async () => {
  const response = await fetchPopulationTrends({ prefCode: 1 })
  expect(response).toStrictEqual([100, 200])
})

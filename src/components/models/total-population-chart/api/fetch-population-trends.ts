// ref: https://opendata.resas-portal.go.jp/docs/api/v1/population/composition/perYear.html
export type APIResult = {
  result: {
    boundaryYear: number
    data: [
      {
        label: string
        data: {
          year: number
          value: number
          rate?: number
        }[]
      }
    ]
  }
}

export const fetchPopulationTrends = async ({
  prefCode,
}: {
  prefCode: number
}) => {
  try {
    const response = await fetch(
      `/api/resas/population/composition/perYear?prefCode=${prefCode}`
    )
    const { result }: APIResult = await response.json()
    const [totalPopulation] = result.data.filter(
      (datum) => datum.label === '総人口'
    )

    return totalPopulation.data.map((e) => e.value)
  } catch (e) {
    console.error(e)
  }
}

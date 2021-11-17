import { NextPage } from 'next'
import { SWRConfig } from 'swr'
import { TotalPopulationChart } from '../components/models/total-population-chart'
import { fetchResas } from '../data/fetch-resas'

type Props = {
  fallback: Record<string, unknown>
}

const HomePage: NextPage<Props> = ({ fallback }) => {
  return (
    <SWRConfig value={{ fallback }}>
      <TotalPopulationChart />
    </SWRConfig>
  )
}

export const getStaticProps = async () => {
  const response = await fetchResas('prefectures')
  const prefectures = await response.json()

  return {
    props: {
      fallback: {
        '/api/resas/prefectures': prefectures,
      },
    },
  }
}

export default HomePage

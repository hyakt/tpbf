import { ReactElement } from 'react'
import { SWRConfig } from 'swr'
import { TotalPopulationChart } from '../components/models/total-population-chart'
import { Layout } from '../components/ui/layout'
import { fetchResas } from '../data/fetch-resas'

type Props = {
  fallback: Record<string, unknown>
}

const HomePage = ({ fallback }: Props) => {
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

HomePage.getLayout = (page: ReactElement) => {
  return (
    <Layout headerProps={{ title: '都道府県別の総人口推移グラフ' }}>
      {page}
    </Layout>
  )
}

export default HomePage

import Highcharts, { Options, SeriesOptionsType } from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

type PopulationChartProps = {
  populations: {
    name: string
    data: number[]
  }[]
}

const defaultChartOptions: Options = {
  title: {
    text: '総人口推移',
  },
  xAxis: {
    title: {
      text: '年度',
      align: 'high',
    },
    labels: {
      formatter: ({ value }) => `${value}年`,
    },
    categories: [
      '1960',
      '1965',
      '1970',
      '1975',
      '1980',
      '1985',
      '1990',
      '1995',
      '2000',
      '2005',
      '2010',
      '2015',
      '2020',
      '2025',
      '2030',
      '2035',
      '2040',
      '2045',
    ],
  },
  yAxis: {
    title: {
      text: '人口数',
      align: 'high',
      rotation: 0,
    },
    labels: {
      formatter: (data) =>
        `${Highcharts.numberFormat(data.value as number, 0, '', ',')}人`,
    },
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
  },
}

export const PopulationChart: React.VFC<PopulationChartProps> = ({
  populations,
}) => {
  const series: SeriesOptionsType[] = populations.map((population) => ({
    type: 'line',
    name: population.name,
    // そのまま配列を渡すと参照先を書き換える場合があるようなので新しく配列を作成する
    data: [...population.data],
  }))

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{ ...defaultChartOptions, series }}
    />
  )
}

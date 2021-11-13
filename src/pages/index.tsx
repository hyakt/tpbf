import useSWR from 'swr'
import { useResasAPI } from '../data/use-resas-api'

const HomePage = () => {
  const { data } = useResasAPI('prefectures')
  console.log(data)

  return <div>This is index page</div>
}

export default HomePage

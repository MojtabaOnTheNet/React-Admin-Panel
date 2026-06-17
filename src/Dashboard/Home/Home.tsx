import { ChartCard } from "@/Dashboard/Home/ChartCard"

import TrendCards from "./TrendCards"
import HomeTableCard from "./HomeTableCard"

const Home = () => {
  return (
    <>
      <TrendCards />
      <div className="mt-10 flex w-full flex-col items-center justify-end gap-7 lg:flex-row">
        <HomeTableCard />
        <ChartCard />
      </div>
    </>
  )
}

export default Home

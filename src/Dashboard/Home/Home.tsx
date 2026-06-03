import { ChartCard } from "@/Dashboard/Home/ChartCard"

import TrendCards from "./TrendCards"
import TableCard from "./TableCard"

const Home = () => {
  return (
    <>
      <TrendCards />
      <div className="mt-10 flex w-full items-center justify-end gap-7">
        <TableCard />
        <ChartCard />
      </div>
    </>
  )
}

export default Home

import AccessTableCard from "./AccessTableCard"
import SearchInput from "./SearchInput"

const Access = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
      </div>
      <AccessTableCard />
    </div>
  )
}

export default Access

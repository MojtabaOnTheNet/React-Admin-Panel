import ChangeForm from "./ChangeForm"
import ColorsTableCard from "./ColorsTableCard"
import SearchInput from "./SearchInput"

const Colors = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <ColorsTableCard />
    </div>
  )
}

export default Colors

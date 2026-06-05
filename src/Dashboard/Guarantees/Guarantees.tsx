import ChangeForm from "./ChangeForm"
import GuaranteesTableCard from "./GuaranteesTableCard"
import SearchInput from "./SearchInput"

const Guarantees = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <GuaranteesTableCard />
    </div>
  )
}

export default Guarantees

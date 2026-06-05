import ChangeForm from "./ChangeForm"
import DiscountsTableCard from "./DiscountsTableCard"
import SearchInput from "./SearchInput"

const Discounts = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <DiscountsTableCard />
    </div>
  )
}

export default Discounts

import CategoriesTableCard from "./CategoriesTableCard"
import ChangeForm from "./ChangeForm"
import SearchInput from "./SearchInput"

const Categories = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <CategoriesTableCard />
    </div>
  )
}

export default Categories

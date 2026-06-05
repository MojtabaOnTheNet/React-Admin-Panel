import BrandsTableCard from "./BrandsTableCard"
import ChangeForm from "./ChangeForm"
import SearchInput from "./SearchInput"

const Brands = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <BrandsTableCard />
    </div>
  )
}

export default Brands

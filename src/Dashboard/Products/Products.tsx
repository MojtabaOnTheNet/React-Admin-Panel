import ChangeForm from "./ChangeForm"
import ProductsTableCard from "./ProductsTableCard"
import SearchInput from "./SearchInput"

const Products = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <ProductsTableCard />
    </div>
  )
}

export default Products

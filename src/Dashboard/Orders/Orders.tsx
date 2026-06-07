import ChangeForm from "./ChangeForm"
import OrdersTableCard from "./OrdersTableCard"
import SearchInput from "./SearchInput"

const Orders = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <OrdersTableCard />
    </div>
  )
}

export default Orders

import ChangeForm from "./ChangeForm"
import DeliveryTableCard from "./DeliveryTableCard"
import SearchInput from "./SearchInput"

const Delivery = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <DeliveryTableCard />
    </div>
  )
}

export default Delivery

import ChangeForm from "./ChangeForm"
import RolesTableCard from "./RolesTableCard"
import SearchInput from "./SearchInput"

const Roles = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <RolesTableCard />
    </div>
  )
}

export default Roles

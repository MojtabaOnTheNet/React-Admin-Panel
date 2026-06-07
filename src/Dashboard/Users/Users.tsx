import ChangeForm from "./ChangeForm"
import SearchInput from "./SearchInput"
import UsersTableCard from "./UsersTableCard"

const Users = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <UsersTableCard />
    </div>
  )
}

export default Users

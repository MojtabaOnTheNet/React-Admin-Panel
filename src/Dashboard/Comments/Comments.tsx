import ChangeForm from "./ChangeForm"
import CommentsTableCard from "./CommentsTableCard"
import SearchInput from "./SearchInput"

const Comments = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <CommentsTableCard />
    </div>
  )
}

export default Comments

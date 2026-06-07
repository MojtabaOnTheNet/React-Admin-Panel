import ChangeForm from "./ChangeForm"
import QuestionsTableCard from "./QuestionsTableCard"
import SearchInput from "./SearchInput"

const Questions = () => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-7">
      <div className="flex w-full items-center justify-between">
        <SearchInput />
        <ChangeForm />
      </div>
      <QuestionsTableCard />
    </div>
  )
}

export default Questions

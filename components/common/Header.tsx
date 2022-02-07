import { ClipboardListIcon, PlusSmIcon } from "@heroicons/react/outline"
import { CreateTaskType } from "../../types/task/CreateTaskType"
import TaskModal from "../tasks/TaskModal"

type HeaderProps = {
  onSave: (task: CreateTaskType) => Promise<void>
}

const Header: React.FC<HeaderProps> = ({ onSave }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white border-b border-gray-300 px-6 p-3">
      <span className="flex items-center">
        <ClipboardListIcon className="h-7 w-7 mr-1" />
        <span className="text-2xl font-bold line-clamp-1 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-500">Task List</span>
      </span>
      <TaskModal onSave={onSave} />
    </div>
  )
}

export default Header

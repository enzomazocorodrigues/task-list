import { ClipboardIcon } from "@heroicons/react/outline"
import { CreateTaskType } from "../../types/task/CreateTaskType";
import TaskModal from "./TaskModal";

type NoTaskListProps = {
  onSave: (task: CreateTaskType) => Promise<void>
}

const NoTaskList: React.FC<NoTaskListProps> = ({ onSave }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ClipboardIcon className="w-28 h-28 text-gray-800" />
      <span className="text-lg font-semibold">There are no tasks</span>
      <span className="text-sm font-normal text-gray-400 mb-4">Add new tasks to keep track of them</span>
      <TaskModal onSave={onSave} />
    </div>
  )
};

export default NoTaskList;

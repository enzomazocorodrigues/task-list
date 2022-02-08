import { useState } from 'react';
import { TaskType } from '../../types/task/TaskType';
import Toggle from '../common/Toggle';
import { CalendarIcon, TrashIcon } from "@heroicons/react/outline"
import axios from 'axios';
import Spinner from '../common/Spinner';

export type TaskProps = {
  onCheck: (id?: string) => Promise<void>
  onDelete: (id?: string) => Promise<void>
  task: TaskType;
};

const Task: React.FC<TaskProps> = ({ onCheck, onDelete, task }) => {
  const formatDate = Intl.DateTimeFormat('pt-BR', { dateStyle: "full" }).format
  let [isLoading, setIsLoading] = useState(false)
  const [checked, setChecked] = useState(task.checked)

  const clickDelete = async (): Promise<void> => {
    setIsLoading(true)
    await onDelete(task.id)
    setIsLoading(false)
  }

  const pastDueDate = task.due_date ? new Date(task.due_date) < new Date() : null

  return (
    <article className={`flex items-center justify-between py-3 px-6 ${!isLoading ? 'hover:bg-gray-50' : 'opacity-50'}`}>
      <div>
        <h2 className="font-semibold text-slate-900 line-clamp-1">{task.title}</h2>
        <span className={`flex items-center ${pastDueDate ? 'text-pink-500' : 'text-gray-500'}`}>
          <CalendarIcon className="w-3 h-5 mr-1" />
          <h6 className="text-sm line-clamp-1">{formatDate(new Date(task.due_date))}</h6>
        </span>
      </div>
      <div className="flex items-center">
        <Toggle disabled={isLoading} value={task.checked} toggleValue={() => onCheck(task.id)} />
        <div className="ml-2 sm:ml-4"></div>
        {!isLoading
          ? <TrashIcon onClick={clickDelete} className="h-6 w-6 text-pink-500 hover:text-pink-300 cursor-pointer focus:ring-4 focus:ring-purple-200"></TrashIcon>
          : <Spinner />
        }
      </div>
    </article>
  )
};

export default Task;

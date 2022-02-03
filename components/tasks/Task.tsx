import { Switch } from '@headlessui/react';
import { useState } from 'react';
import { TaskType } from '../../types/task/TaskType';
import Toggle from '../common/Toggle';

export type TaskProps = {
  task: TaskType;
};

const Task: React.FC<TaskProps> = ({ task }) => {
  const [checked, setChecked] = useState(false)
  return (
    <article className="flex items-center justify-between py-3 px-6 hover:bg-gray-50">
      <div>
        <h2 className="font-semibold text-slate-900">{task.title}</h2>
        <h6 className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-br from-pink-600 to-blue-600">{new Date(task.due_date).toLocaleDateString()}</h6>
      </div>
      <Toggle color='green-400' />
    </article>
  )
};

export default Task;

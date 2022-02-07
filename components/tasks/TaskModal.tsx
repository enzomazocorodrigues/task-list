import { PlusSmIcon } from "@heroicons/react/solid"
import axios from "axios"
import { useState } from "react"
import { CreateTaskType } from "../../types/task/CreateTaskType"
import { TaskType } from "../../types/task/TaskType"
import Button from "../common/Button"
import Modal from "../common/Modal"
import TextField from "../common/TextField"

type TaskModalProps = {
  onSave: (task: CreateTaskType) => Promise<void>
}

const TaskModal: React.FC<TaskModalProps> = ({ onSave }) => {
  let [isOpen, setIsOpen] = useState(false)
  let [isLoading, setIsLoading] = useState(false)
  let [title, setTitle] = useState('')
  let [due_date, setDueDate] = useState(new Date().toISOString().substring(0, 10))

  const toggleModal = (): void => {
    setIsOpen(!isOpen)
  }

  const clickSave = async () => {
    setIsLoading(true)
    const createTask: CreateTaskType = { title, due_date }
    await onSave(createTask)
    toggleModal()
    setIsLoading(false)
  }

  return (
    <>
      <Button onClick={toggleModal}>
        <PlusSmIcon className="w-4 h-4 mr-1" />
        New
      </Button>
      <Modal title="New Task" open={isOpen} toggleModal={toggleModal} >
        <TextField value={title} onChange={(e) => setTitle(e.target.value)} className="mt-4" placeholder="Title" />
        <TextField value={due_date} onChange={(e) => { console.log(e.target.value); setDueDate(e.target.value) }} className="mt-4" type="date" placeholder="Due date" />

        <Button onClick={clickSave} loading={isLoading} className="mt-4">
          Add task
        </Button>
      </Modal>

    </>
  )
}

export default TaskModal

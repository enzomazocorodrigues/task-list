import { ClipboardListIcon } from "@heroicons/react/outline"

const Header: React.FC = () => {
  return (
    <div className="flex items-center border-b-2 border-gray-200 px-6 p-3">
      <ClipboardListIcon className="h-7 w-7 mr-2" />
      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-pink-500 to-blue-600">Task List</span>
    </div>
  )
}

export default Header

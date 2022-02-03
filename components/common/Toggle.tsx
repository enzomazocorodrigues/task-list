import { Switch } from "@headlessui/react";
import { useState } from "react";

type ToggleProps = {
  color: string
}

const Toogle: React.FC<ToggleProps> = ({ color }) => {
  const [enabled, setEnabled] = useState(false)

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? `bg-${color}` : 'bg-gray-200'
        } relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block w-4 h-4 transform bg-white rounded-full transition ease-in-out duration-200`}
      />
    </Switch>
  )

};

export default Toogle;

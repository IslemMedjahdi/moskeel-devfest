import React, { useState } from "react";
import { Switch as Switcha } from "@headlessui/react";

const Switch = ({ initial }) => {
  const [enabled, setEnabled] = useState(initial);
  return (
    <Switcha
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? "bg-green-600" : "bg-gray-500"}
relative inline-flex h-[38px]  scale-50 z-0 w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={`${enabled ? "translate-x-9" : "translate-x-0"}
pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
      />
    </Switcha>
  );
};

export default Switch;

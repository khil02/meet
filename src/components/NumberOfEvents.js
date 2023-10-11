// src/components/NumberOfEvents.js

import { useState } from "react";

const NumberOfEvents = ({}) => {
  const [NOE, setNOE] = useState("32");

  const handleNumberChanged = (event) => {
    const value = event.target.value;
    setNOE(value);
  };

  return (
    <div id="Number-Of-Events">
      "Number of events: "
      <input
        id="NumberOfEvents"
        type="text"
        value={NOE}
        onChange={handleNumberChanged}
      ></input>
    </div>
  );
};
export default NumberOfEvents;

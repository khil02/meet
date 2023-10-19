// src/components/NumberOfEvents.js

//import { useState } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  //const [NOE, setNOE] = useState(setCurrentNOE);

  const handleNumberChanged = (event) => {
    const value = event.target.value;
    setCurrentNOE(value);
  };

  return (
    <div id="Number-Of-Events">
      "Number of events: "
      <input
        id="NumberOfEvents"
        type="text"
        defaultValue="32"
        onChange={handleNumberChanged}
      />
    </div>
  );
};
export default NumberOfEvents;

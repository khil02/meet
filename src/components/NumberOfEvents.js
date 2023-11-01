// src/components/NumberOfEvents.js

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  let errorText;

  const handleNumberChanged = (event) => {
    const value = event.target.value;
    if (isNaN(value) || value <= 0) {
      errorText = "Only Positive numbers are allowed";
    } else {
      errorText = "";
      setCurrentNOE(value);
    }
    setErrorAlert(errorText);
  };

  return (
    <div id="Number-Of-Events">
      "Number of events: "
      <input
        id="NumberOfEvents"
        className="NumberOfEvents"
        type="text"
        defaultValue="32"
        onChange={handleNumberChanged}
      />
    </div>
  );
};
export default NumberOfEvents;

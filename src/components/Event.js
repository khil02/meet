// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <li className="event">
      <div>
        <h2 className="eventTitle">{event.summary}</h2>
        <div className="location">{event.location}</div>
        <div className="startTime">{event.created}</div>
        <button
          className="detailsButton"
          onClick={() => {
            setShowDetails(!showDetails);
          }}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>
        {showDetails ? <p className="details">{event.description}</p> : null}
      </div>
    </li>
  );
};

export default Event;

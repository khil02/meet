// src/components/Event.js

import { useState } from "react";

const Event = ({ event }) => {
  const [showDetails, setShowDetails] = useState(false);
  //this should convert the UTC time to standard American layout and local time
  let [Y, M, D, H, m, s] = event.created.split(/\D/);
  let date = new Date(Date.UTC(Y, M - 1, D, H, m, s));
  date = date.toLocaleString();

  return (
    <li className="event">
      <div>
        <h2 className="eventTitle">{event.summary}</h2>
        <div className="location">{event.location}</div>
        <div className="startTime">{date}</div>
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

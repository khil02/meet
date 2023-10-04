// src/__test__/EventList.test.js

import { render } from "@testing-library/react";
import EventList from "../components/EventList";
import { getEvents } from "../api";
import { async } from "q";

describe("<EventList /> component", () => {
  let EventListComponent;
  beforeEach(() => {
    return (EventListComponent = render(<EventList />));
  });
  test("has an element with 'list' role", () => {
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    EventListComponent.rerender(<EventList events={allEvents} />);
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(
      allEvents.length
    );
  });
});
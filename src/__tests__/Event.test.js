// src/__tests__/Event.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event";
import mockData from "../mock-data";
import { async } from "q";

describe("<Event /> component", () => {
  let eventComponent;
  const mockEvent = mockData[0];
  let detailBTN;

  beforeEach(() => {
    eventComponent = render(<Event event={mockEvent} />);
    detailBTN = eventComponent.container.querySelector(".detailsButton");
  });

  test("event compenent is rendered", () => {
    expect(eventComponent).toBeDefined();
  });

  test("renders event name", () => {
    const eventName = eventComponent.queryByText(mockEvent.summary);
    expect(eventName).toBeInTheDocument();
  });

  test("renders event location", () => {
    const eventLocation = eventComponent.queryByText(mockEvent.location);
    expect(eventLocation).toBeInTheDocument();
  });

  test("renders event start time", () => {
    const eventTime = eventComponent.queryByText(mockEvent.created);
    expect(eventTime).toBeInTheDocument();
  });

  test("renders event details button with the title (show details)", () => {
    expect(eventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("by default, event details section should be hidden", () => {
    const eventDescription = eventComponent.container.querySelector(".details");
    expect(eventDescription).not.toBeInTheDocument();
  });

  test("renders the details section upon clicking 'show details button", async () => {
    const user = userEvent.setup();

    await user.click(detailBTN);
    const eventDescription = eventComponent.container.querySelector(".details");
    expect(eventDescription).toBeInTheDocument();
  });

  test("hides the details section upon clicking 'hide details' button and changes button text", async () => {
    const user = userEvent.setup();

    //Clicks button to show details
    await user.click(detailBTN);
    let eventDescription = eventComponent.container.querySelector(".details");
    expect(eventDescription).toBeInTheDocument();
    expect(eventComponent.queryByText("Hide Details")).toBeInTheDocument();

    //Clicks button again to hide details
    await user.click(detailBTN);
    eventDescription = eventComponent.container.querySelector(".details");
    expect(eventDescription).not.toBeInTheDocument();
    expect(eventComponent.queryByText("Show Details")).toBeInTheDocument();
  });

  test("renders event details button with the title (hide details)", async () => {
    const user = userEvent.setup();

    await user.click(detailBTN);
    expect(eventComponent.queryByText("Hide Details")).toBeInTheDocument();
  });
});

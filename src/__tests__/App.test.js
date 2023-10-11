// src/__tests__/App.test.js

import { render, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";

describe("<App /> component", () => {
  let AppDOM;
  beforeEach(() => {
    return (AppDOM = render(<App />).container.firstChild);
  });

  test("renders list of events", () => {
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });

  test("renderCitySearch", () => {
    expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
  });

  test("renderNumberOfEvents", () => {
    expect(AppDOM.querySelector("#Number-Of-Events")).toBeInTheDocument();
  });
});

describe("<App /> intergration", () => {
  test("renders a list of events matching the city selected by user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await user.type(CitySearchInput, "Berlin");
    const BerlinGermanySuggestion =
      within(CitySearchDOM).queryByText("Berlin, Germany");
    await user.click(BerlinGermanySuggestion);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === "Berlin, Germany"
    );

    expect(allRenderedEventItems.length).toBe(berlinEvents.length);

    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });
});

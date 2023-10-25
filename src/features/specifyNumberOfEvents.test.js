import { defineFeature, loadFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");
let AppComponent;
let AppDOM;
let NOETextBox;

defineFeature(feature, (test) => {
  test("user hasn’t searched for a specific city, show events for all cities 32 (default) events should be displayed", ({
    given,
    when,
    then,
  }) => {
    given("App is closed", () => {});

    when("user opens App", () => {
      AppComponent = render(<App />);
    });

    then("thirty two events should be in the eventslist", async () => {
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  test("user types a different number into Number of Events field, that number events should be displayed", ({
    given,
    when,
    then,
  }) => {
    given("App is opened", () => {
      AppComponent = render(<App />);
    });

    when("user types a new number into Number of Events field", async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const NOEDOM = AppDOM.querySelector("#Number-Of-Events");
      NOETextBox = NOEDOM.querySelector("#NumberOfEvents");
      await user.type(NOETextBox, "{backspace}{backspace}10");
    });

    then(
      "Number of Events in eventslist should match that number",
      async () => {
        const EventListDOM = AppDOM.querySelector("#event-list");
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(10);
          expect(NOETextBox).not.toHaveValue("32");
          expect(NOETextBox).toHaveValue("10");
        });
      }
    );
  });
});

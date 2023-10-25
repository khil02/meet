import { defineFeature, loadFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");
let AppComponent;
let AppDOM;
let detailsButton;

defineFeature(feature, (test) => {
  test("event details are minimized by default", ({ given, when, then }) => {
    given("app is closed", () => {});

    when("user opens the app", () => {
      AppComponent = render(<App />);
    });

    then("event details should not be displayed", async () => {
      AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventDescription = AppDOM.querySelector(".details");
        expect(eventDescription).not.toBeInTheDocument();
      });
    });
  });

  test("event details button is clicked details are displayed", ({
    given,
    when,
    then,
  }) => {
    given("app is opened and no events have been clicked", () => {
      AppComponent = render(<App />);
    });

    when("the user clicks an event details button", async () => {
      const user = userEvent.setup();
      AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        detailsButton = within(EventListItems[0]).queryByRole("button");
        user.click(detailsButton);
      });
    });

    then("the event should expand to show details for that event", async () => {
      const eventDescription = AppDOM.querySelector(".details");
      expect(eventDescription).toBeDefined;
    });
  });

  test("event details button is clicked a second time details are hidden", ({
    given,
    when,
    then,
  }) => {
    given(
      "app is opened and an event details button has already been clicked",
      async () => {
        AppComponent = render(<App />);
        const user = userEvent.setup();
        AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector("#event-list");

        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          detailsButton = within(EventListItems[0]).queryByRole("button");
          user.click(detailsButton);
        });
      }
    );

    when("the user clicks the event details button a second time", async () => {
      const user = userEvent.setup();
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        detailsButton = within(EventListItems[0]).queryByRole("button");
        user.click(detailsButton);
      });
    });

    then(
      "the event should minimize and hide the details for that event",
      async () => {
        AppDOM = AppComponent.container.firstChild;
        await waitFor(() => {
          const eventDescription = AppDOM.querySelector(".details");
          expect(eventDescription).not.toBeInTheDocument();
        });
      }
    );
  });
});

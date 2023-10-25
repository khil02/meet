Feature: Show and hide an event’s details
    Scenario: event details are minimized by default
        Given app is closed
        When user opens the app
        Then event details should not be displayed

    Scenario: event details button is clicked details are displayed
        Given app is opened and no events have been clicked
        When the user clicks an event details button
        Then the event should expand to show details for that event

    Scenario: event details button is clicked a second time details are hidden
        Given app is opened and an event details button has already been clicked
        When the user clicks the event details button a second time
        Then the event should minimize and hide the details for that event
Feature: Specify Number of Events in list
    Scenario: user hasn’t searched for a specific city, show events for all cities 32 (default) events should be displayed
        Given App is closed
        When user opens App
        Then thirty two events should be in the eventslist

    Scenario: user types a different number into Number of Events field, that number events should be displayed
        Given App is opened
        When user types a new number into Number of Events field
        Then Number of Events in eventslist should match that number
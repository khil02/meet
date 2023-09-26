# Meet App

## User Stories and features

### Feature 1: Filter Events by City

As a **User**  
I should be able to **filter events by city**  
So that **I can see a list of events taking place in that city**

**Scenario 1:**
User hasn’t searched for a specific city, show upcoming events for all cities.

- **Given** user hasn’t searched for any city
- **When** the user opens the app
- **Then** the user should see a list of upcoming events

**Scenario 2:**
User has searched for a specific city, show upcoming events for that city.

- **Given** user has searched for that city
- **When** the user opens the app
- **Then** the user should see a list of upcoming events for that city

### Feature 2: Show/Hide Event Details

As a **User**  
I should be able to **show and hide events**  
So that **I see the event and then not see them**

**Scenario 1**:
Event details are minimized by default but can be expanded by clicking on it

- **Given** app is opened and no events have been clicked
- **When** the user clicks on an event
- **Then** the event should expand showing the full details.

**Scenario 2:**
Event details have been expanded, clicking event again should minimize those details

- **Given** app is opened and an event has been clicked
- **When** the user clicks on an event again
- **Then** the event should minimize, no longer showing the full details.

### Feature 3: Specify Number of Events

As a **User,**  
I should be able to **see the number of events per location**  
So that **I can look a location how many events are there**

**Scenario 1:**
User hasn’t searched for a specific city, show number events for all cities.

- **Given** user hasn’t searched for any city
- **When** the user opens the app
- **Then** the user should see a number of upcoming events

**Scenario 2:**
User has searched for a specific city, show number of upcoming events for that city.

- **Given** user has searched for a city
- **When** the user opens the app
- **Then** the user should see the number for amount of upcoming events for that city

### Feature 4: Use the App when Offline

As a **User,**  
I should be able to **use app when offline**  
So that **I can be offline and still use the app**

**Scenario 1:**
User has opened the app when online but is now offline and can see previously viewed events.

- **Given** user is offline but used app previously.
- **When** the user opens the app
- **Then** the user should see a list of events they viewed the last time the opened the app online

**Scenario 2:**
User hasn’t opened the app when online and is now offline and cannot see any events.

- **Given** user is offline and hasn’t used app previously.
- **When** the user opens the app
- **Then** the user should see no events because nothing has been downloaded when online.

### Feature 5: Add an app Shortcut to the home screen

As a **User,**  
I should be able to **Add an App shortcut to the home screen**  
So that **I can click a shortcut on the home screen and open the app**

**Scenario 1:**
User has installed the app and adds a shortcut to open the app on their home screen.

- **Given** has installed the app
- **When** the user selects the app, should be able to add a shortcut
- **Then** the user should have shortcut added to the home screen

### Feature 6: Display charts visualizing event details

As a **User,**  
I should be able to **see charts visualizing event details in each city**  
So that **I can review a chart to better understand what events are in which city**

**Scenario 1:**
User selects charts pages and can view the kind of events in each city

- **Given** user hasn’t searched for any city
- **When** the user opens the charts page
- **Then** the user should see a chart of the types of upcoming events in each city

## Why use Serverless functions

Using serverless functions will allow the Meet App, to having real time data processing, provide event notification, authenticate users and it will allow for more rapid deployment of the application and reduce the infrastructure setup needed to make the application scalable available for more users easier. Most notably, the user authentication will allow for a broader range of users without having to maintain that functionality on our own machines.

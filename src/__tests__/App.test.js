// src/__tests__/App.test.js

import { render } from "@testing-library/react";
import App from "../App";

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

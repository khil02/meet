// src/__test__/CitySearch.test.js

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CitySearch from "../components/CitySearch";

describe("<CitySearch /> component", () => {
  let CitySearchComponent;
  beforeEach(() => {
    CitySearchComponent = render(<CitySearch />);
  });

  test("render text input", () => {
    //const CitySearchComponent = render(<CitySearch />);
    const CityTextBox = CitySearchComponent.queryByRole("textbox");
    expect(CityTextBox).toBeInTheDocument();
    expect(CityTextBox).toHaveClass("city");
  });

  test("suggestions list is hidden by default", () => {
    const CitySearchComponent = render(<CitySearch />);
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).not.toBeInTheDocument();
  });

  test("renders a list of suggestions when city textbox gains focus", async () => {
    const user = userEvent.setup();
    const CityTextBox = CitySearchComponent.queryByRole("textbox");
    await user.click(CityTextBox);
    const suggestionList = CitySearchComponent.queryByRole("list");
    expect(suggestionList).toBeInTheDocument();
    expect(suggestionList).toHaveClass("suggestions");
  });
});

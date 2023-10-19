// src/__tests__/NumberOfEvent.test.js
import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";
import { async } from "q";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;
  let NOETextBox;

  beforeEach(() => {
    NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
    NOETextBox = NumberOfEventsComponent.queryByRole("textbox");
  });

  test("total number of events displayed", () => {
    expect(NumberOfEventsComponent).toBeDefined();
  });

  test("tests that there is textbox for number of events", () => {
    expect(NOETextBox).toBeInTheDocument();
  });

  test("tests that default number of events is 32", () => {
    expect(NOETextBox).toHaveValue("32");
  });

  test("tests that input changes number of event", async () => {
    const user = userEvent.setup();
    //types new amount into input field
    await user.type(NOETextBox, "{backspace}{backspace}10");

    expect(NOETextBox).not.toHaveValue("32");
    expect(NOETextBox).toHaveValue("10");
  });
});

import React from "react";
import Team from "../src/components/Team";
import { render, fireEvent } from "@testing-library/react"

describe("Team Component", () => {
  let wrapper;
  const props = {
    team: {
      full_name: "Chicago Bulls"
    },
    setSelectedCity: jest.fn(),
  }

  beforeEach(() => {
    wrapper = render(<Team {...props} />);
  });

  test("should render team names", () => {
    expect(wrapper.getByText("Chicago Bulls")).not.toBeNull();
  });

  test("should render basketball icon", () => {
    expect(wrapper.getByTitle("basketballIcon")).not.toBeNull();
  });

  test("should invoke setSelectedCity on click", () => {
    const teamCard = wrapper.getByTitle("teamCard");
    fireEvent.click(teamCard);
    expect(props.setSelectedCity).toHaveBeenCalledTimes(1);
  })
});
import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react"
import App from "../src/App";

describe("App", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = render(<App />);
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  test("instructions button should link to github", () => {
    expect(wrapper.getByText("Instructions").href).toEqual("https://github.com/ReWattInc/rs_challenge/blob/main/README.md");
  })

})

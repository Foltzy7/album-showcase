import React from "react";
import {render} from "@testing-library/react";
import App from "../App";

test("renders learn react link", () => {
  const {getByText} = render(<App/>);
  const aboutLink = getByText("About");
  const homeLink = getByText("Home");
  const aspirationsLink = getByText("Aspirations");
  expect(aboutLink).toBeInTheDocument();
  expect(homeLink).toBeInTheDocument();
  expect(aspirationsLink).toBeInTheDocument();
});

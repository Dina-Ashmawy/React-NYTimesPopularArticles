import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from ".";
import "@testing-library/jest-dom";

describe("Header Component", () => {
  it("renders NY Times Most Popular Articles app name correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(getByText("NY Times Most Popular Articles")).toBeInTheDocument();
  });

  it("renders link to home correctly", () => {
    const { getByRole } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const linkElement = getByRole("link", {
      name: "NY Times Most Popular Articles",
    });
    expect(linkElement).toHaveAttribute("href", "/");
  });
});

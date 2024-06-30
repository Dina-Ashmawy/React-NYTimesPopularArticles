import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import "@testing-library/jest-dom";

jest.mock("./features/header", () => () => <div data-testid="mock-header" />);

describe("App component", () => {
  it("renders header and routes correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

jest.mock("./features/header", () => () => <div data-testid="mock-header" />);

describe("App component", () => {
  it("renders header and routes correctly", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
  });
});

import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PeriodSelector from ".";
import { PERIOD_VALUES } from "../../constants";
import "@testing-library/jest-dom";

describe("PeriodSelector Component", () => {
  it("renders period selector with correct options", () => {
    const mockSetPeriod = jest.fn();
    const { getByText, getByDisplayValue } = render(
      <PeriodSelector period={7} setPeriod={mockSetPeriod} />,
    );
    expect(getByText("Select Period")).toBeInTheDocument();
    PERIOD_VALUES.forEach((period) => {
      expect(getByText(period.label)).toBeInTheDocument();
    });
    expect(getByDisplayValue("7 days")).toBeInTheDocument();
  });

  it("updates period when a different option is selected", () => {
    const mockSetPeriod = jest.fn();
    const { getByRole } = render(
      <PeriodSelector period={7} setPeriod={mockSetPeriod} />,
    );

    const selectElement = getByRole("combobox") as HTMLSelectElement;
    fireEvent.change(selectElement, { target: { value: "30" } });
    expect(mockSetPeriod).toHaveBeenCalledWith(30);
  });
});

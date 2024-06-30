import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import DetailsPage from "./detailsPage";

jest.mock("../features/articleDetails", () => () => (
  <div data-testid="mock-article-details">Mock ArticleDetails</div>
));

describe("DetailsPage Component", () => {
  it("renders ArticleDetails component", () => {
    const { getByTestId } = render(<DetailsPage />);

    const articleDetailsElement = getByTestId("mock-article-details");
    expect(articleDetailsElement).toBeInTheDocument();
    expect(articleDetailsElement).toHaveTextContent("Mock ArticleDetails");
  });
});

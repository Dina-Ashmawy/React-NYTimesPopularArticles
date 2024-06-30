import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ArticlesList from ".";
import { mockArticles } from "../../../public/mock/test.mock";

describe("ArticlesList Component", () => {
  it("renders a list of articles correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ArticlesList articles={mockArticles} />;
      </MemoryRouter>
    );

    expect(getByText("Test Article 1")).toBeInTheDocument();
    expect(getByText("Test Article 2")).toBeInTheDocument();
  });

  it("renders correctly with no articles", () => {
    const { container } = render(
      <MemoryRouter>
        <ArticlesList articles={[]} />
      </MemoryRouter>
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});

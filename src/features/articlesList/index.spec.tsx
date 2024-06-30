import React from "react";
import { render } from "@testing-library/react";
import ArticlesList from ".";
import { Article } from "../../interfaces";
import "@testing-library/jest-dom";
import { mockArticles } from "../../../public/mock/test.mock";
import { MemoryRouter } from "react-router-dom";

describe("ArticlesList Component", () => {
  it("renders a list of articles correctly", () => {
    const { getByText } = render(
      <MemoryRouter>
        <ArticlesList articles={mockArticles} />;
      </MemoryRouter>,
    );

    expect(getByText("Test Article 1")).toBeInTheDocument();
    expect(getByText("Test Article 2")).toBeInTheDocument();
  });

  it("renders correctly with no articles", () => {
    const { container } = render(
      <MemoryRouter>
        <ArticlesList articles={[]} />
      </MemoryRouter>,
    );
    expect(container.firstChild).toBeEmptyDOMElement();
  });
});

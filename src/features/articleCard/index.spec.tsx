import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import ArticleCard from ".";
import { mockSingleArticle } from "../../../public/mock/test.mock";

describe("ArticleCard Component", () => {
  it("renders article card with correct details", () => {
    const { queryByText, getByAltText } = render(
      <MemoryRouter>
        <ArticleCard article={mockSingleArticle} />
      </MemoryRouter>
    );

    const articleTitle = queryByText(mockSingleArticle.title);
    expect(articleTitle).toBeInTheDocument();

    const publishedDate = queryByText(
      `Published Date: ${mockSingleArticle.published_date}`
    );
    expect(publishedDate).toBeInTheDocument();

    const section = queryByText(`Section: ${mockSingleArticle.section}`);
    expect(section).toBeInTheDocument();

    const thumbnail = getByAltText(mockSingleArticle.title) as HTMLImageElement;
    expect(thumbnail.src).toBe(
      mockSingleArticle.media[0]["media-metadata"][0].url
    );
  });
});

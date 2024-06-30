import React from "react";
import { render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import "@testing-library/jest-dom";
import ArticleDetails from ".";
import { Article } from "../../interfaces";
import { mockSingleArticle } from "../../../public/mock/test.mock";
import { RootState } from "../../redux/store";
import { Provider } from "react-redux";

const mockStore = configureStore([]);

const mockState = {
  articles: {
    articles: [mockSingleArticle],
  },
};

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ articleId: "1" }),
}));

jest.mock("../../redux/articlesSlice", () => ({
  selectArticleById: (id: number) => (state: RootState) =>
    state.articles.articles.find((article: Article) => article.id === id),
}));

describe("ArticleDetails Component", () => {
  let store: any;

  beforeEach(() => {
    store = mockStore(mockState);
  });

  it("renders the article details correctly", () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path="/:articleId" element={<ArticleDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText("Test Article 1")).toBeInTheDocument();
    expect(getByText("By John Doe")).toBeInTheDocument();
    expect(getByText("2024-06-30")).toBeInTheDocument();
    expect(getByAltText("An image for test article 1.")).toBeInTheDocument();
    expect(
      getByText("This is the abstract for test article 1."),
    ).toBeInTheDocument();
    expect(getByText("Source: NY Times")).toBeInTheDocument();
    expect(getByText("Section: Technology")).toBeInTheDocument();
    expect(getByText("Keywords: technology, test")).toBeInTheDocument();
    expect(getByText("Read Full Article")).toHaveAttribute(
      "href",
      "http://example.com/article1",
    );
  });

  it("renders an error message when the article is not found", () => {
    const emptyState = {
      ...mockState,
      articles: { articles: [], status: "succeeded", error: null },
    };
    store = mockStore(emptyState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path="/:articleId" element={<ArticleDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>,
    );

    expect(getByText("Article is not found.")).toBeInTheDocument();
  });
});

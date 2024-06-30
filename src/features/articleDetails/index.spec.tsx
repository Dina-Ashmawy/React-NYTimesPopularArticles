import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import configureStore from "redux-mock-store";
import ArticleDetails from ".";
import { mockSingleArticle } from "../../../public/mock/test.mock";
import { Article } from "../../interfaces";
import { RootState } from "../../redux/store";

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
  selectArticleById: jest
    .fn()
    .mockImplementation((state: RootState) =>
      state.articles.articles.find((article: Article) => article.id === 1)
    ),
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
      </Provider>
    );

    expect(getByText("Test Article 1")).toBeInTheDocument();
    expect(getByText("By John Doe")).toBeInTheDocument();
    expect(getByText("2024-06-30")).toBeInTheDocument();
    expect(getByAltText("An image for test article 1.")).toBeInTheDocument();
    expect(
      getByText("This is the abstract for test article 1.")
    ).toBeInTheDocument();
    expect(getByText("Source: NY Times")).toBeInTheDocument();
    expect(getByText("Section: Technology")).toBeInTheDocument();
    expect(getByText("Keywords: technology, test")).toBeInTheDocument();
    expect(getByText("Read Full Article")).toHaveAttribute(
      "href",
      "http://example.com/article1"
    );
  });

  it("renders an error message when the article is not found", () => {
    const emptyState = {
      ...mockState,
      articles: { articles: [] },
    };
    store = mockStore(emptyState);

    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/1"]}>
          <Routes>
            <Route path="/:articleId" element={<ArticleDetails />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    expect(getByText("Article is not found.")).toBeInTheDocument();
  });
});

import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { useGetMostViewedQuery } from "../services/nyTimesApi";
import ListPage from "./listPage";

jest.mock("../services/nyTimesApi");

const mockStore = configureStore([]);
const store = mockStore({
  articles: {
    articles: [],
    isLoading: false,
    error: null,
  },
});

describe("ListPage Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state initially", async () => {
    (useGetMostViewedQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: undefined,
      isLoading: true,
    });

    const { getByText } = render(
      <Provider store={store}>
        <ListPage />
      </Provider>
    );

    await (async () => {
      expect(getByText("Loading...")).toBeInTheDocument();
    });
  });

  it("renders error message when there is an error", async () => {
    (useGetMostViewedQuery as jest.Mock).mockReturnValue({
      data: undefined,
      error: "Mock Error",
      isLoading: false,
    });

    const { getByText } = render(
      <Provider store={store}>
        <ListPage />
      </Provider>
    );
    await (async () => {
      expect(getByText("There is Error in fetching data")).toBeInTheDocument();
    });
  });

  it("renders PeriodSelector and ArticlesList components when data is fetched", async () => {
    const mockArticles = [{ id: 1, title: "Mock Article" }];

    (useGetMostViewedQuery as jest.Mock).mockReturnValue({
      data: mockArticles,
      error: undefined,
      isLoading: false,
    });

    const { getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <ListPage />
        </BrowserRouter>
      </Provider>
    );

    await waitFor(() => {
      expect(getByText("Select Period")).toBeInTheDocument();
      expect(getByText("Mock Article")).toBeInTheDocument();
    });
  });
});

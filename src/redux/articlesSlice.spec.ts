import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { mockArticles, mockSingleArticle } from "../../public/mock/test.mock";
import { Article } from "../interfaces";
import {
  selectAllArticles,
  selectArticleById,
  setArticles,
} from "./articlesSlice";

const articlesSlice = createSlice({
  name: "articles",
  initialState: { articles: [] as Article[] },
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    articles: articlesSlice.reducer,
  },
});

const testState: any = {
  articles: {
    articles: mockArticles,
  },
};

describe("articlesSlice", () => {
  it("should set articles correctly", () => {
    store.dispatch(setArticles([mockSingleArticle]));

    const updatedState = store.getState().articles;
    expect(updatedState.articles).toEqual([mockSingleArticle]);
  });
});

describe("selectors", () => {
  const initialState: any = {
    articles: { articles: mockArticles },
  };

  it("selectAllArticles selector should return all articles", () => {
    const selectedArticles = selectAllArticles(initialState);
    expect(selectedArticles).toEqual(mockArticles);
  });

  it("should return the correct article by ID", () => {
    const selectedArticle = selectArticleById(testState, 1);
    expect(selectedArticle).toEqual(mockArticles[0]);
  });

  it("should return undefined for non-existent article ID", () => {
    const selectedArticle = selectArticleById(testState, 100);
    expect(selectedArticle).toBeUndefined();
  });
});

import { createSlice, createSelector } from "@reduxjs/toolkit";
import { Article } from "../interfaces";
import { RootState } from "./store";

interface ArticlesState {
  articles: Article[];
}

const initialState: ArticlesState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles(state, action) {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;

export const selectAllArticles = (state: RootState) => state.articles.articles;
export const selectArticleById = (articleId: number) =>
  createSelector(
    (state: RootState) => state.articles.articles,
    (articles: Article[]) =>
      articles.find((article) => article.id === articleId),
  );

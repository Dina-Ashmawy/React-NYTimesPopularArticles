import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ArticlesList from "../features/articlesList";
import PeriodSelector from "../features/periodSelector";
import { StyledErrorMessage, StyledLoadingMessage } from "../globalStyles";
import { setArticles } from "../redux/articlesSlice";
import { useGetMostViewedQuery } from "../services/nyTimesApi";

const ListPage: React.FC = () => {
  const [period, setPeriod] = useState<number>(1);
  const { data: articles, error, isLoading } = useGetMostViewedQuery(period);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles) {
      dispatch(setArticles(articles));
    }
  }, [articles, dispatch]);

  if (isLoading) return <StyledLoadingMessage>Loading...</StyledLoadingMessage>;
  if (error)
    return (
      <StyledErrorMessage>There is Error in fetching data</StyledErrorMessage>
    );

  return (
    <div id="list-page-root">
      <PeriodSelector period={period} setPeriod={setPeriod} />
      <ArticlesList articles={articles} />
    </div>
  );
};

export default ListPage;

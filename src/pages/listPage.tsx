import React, { useEffect, useState } from "react";
import PeriodSelector from "../features/periodSelector";
import ArticlesList from "../features/articlesList";
import { useGetMostViewedQuery } from "../services/nyTimesApi";
import { StyledErrorMessage, StyledLoadingMessage } from "../globalStyles";
import { setArticles } from "../redux/articlesSlice";
import { useDispatch } from "react-redux";

const ListPage: React.FC = () => {
  const [period, setPeriod] = useState<number>(1);
  const { data: articles, error, isLoading } = useGetMostViewedQuery(period);
  const dispatch = useDispatch();

  useEffect(() => {
    if (articles) {
      dispatch(setArticles(articles));
    }
  }, [articles]);

  if (isLoading) return <StyledLoadingMessage>Loading...</StyledLoadingMessage>;
  if (error)
    return (
      <StyledErrorMessage>There is Error in fetching data</StyledErrorMessage>
    );

  return (
    <>
      <PeriodSelector period={period} setPeriod={setPeriod} />
      <ArticlesList articles={articles} />
    </>
  );
};

export default ListPage;

import React from "react";
import { Article } from "../../interfaces";
import ArticleCard from "../articleCard";
import { StyledCardWrapper } from "./styled";

interface ArticlesListProps {
  articles: Article[];
}

const ArticlesList: React.FC<ArticlesListProps> = ({ articles }) => {
  return (
    <StyledCardWrapper>
      {articles?.map((article) => (
        <ArticleCard
          article={article}
          key={`${article?.id?.toString()}-${article?.title}`}
        />
      ))}
    </StyledCardWrapper>
  );
};

export default ArticlesList;

import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  StyledDetailsContainer,
  StyledTitle,
  StyledByline,
  StyledPublishedDate,
  StyledAbstract,
  StyledMediaImage,
  StyledSource,
  StyledSection,
  StyledKeywords,
  StyledFullArticleLink,
} from "./styled";
import { selectArticleById } from "../../redux/articlesSlice";
import { StyledErrorMessage } from "../../globalStyles";

const ArticleDetails: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = useSelector(selectArticleById(Number(articleId)));

  if (!article) {
    return <StyledErrorMessage>Article is not found.</StyledErrorMessage>;
  }

  return (
    <StyledDetailsContainer>
      <StyledTitle>{article.title}</StyledTitle>
      <StyledByline>{article.byline}</StyledByline>
      <StyledPublishedDate>{article.published_date}</StyledPublishedDate>
      {article.media && article.media[0] && (
        <StyledMediaImage
          src={article.media[0]["media-metadata"][2].url}
          alt={article.media[0].caption}
        />
      )}
      <StyledAbstract>{article.abstract}</StyledAbstract>
      <StyledSource>Source: {article.source}</StyledSource>
      <StyledSection>Section: {article.section}</StyledSection>
      {article.adx_keywords && (
        <StyledKeywords>Keywords: {article.adx_keywords}</StyledKeywords>
      )}
      <StyledFullArticleLink
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Article
      </StyledFullArticleLink>
    </StyledDetailsContainer>
  );
};

export default ArticleDetails;

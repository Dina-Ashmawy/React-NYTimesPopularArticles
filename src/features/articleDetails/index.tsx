import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { StyledErrorMessage } from "../../globalStyles";
import { selectArticleById } from "../../redux/articlesSlice";
import { RootState } from "../../redux/store";
import {
  StyledAbstract,
  StyledByline,
  StyledDetailsContainer,
  StyledFullArticleLink,
  StyledKeywords,
  StyledMediaImage,
  StyledPublishedDate,
  StyledSection,
  StyledSource,
  StyledTitle,
} from "./styled";

const ArticleDetails: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = useSelector((state: RootState) =>
    selectArticleById(state, Number(articleId))
  );

  if (!article) {
    return <StyledErrorMessage>Article is not found.</StyledErrorMessage>;
  }

  const {
    title,
    byline,
    published_date,
    media,
    abstract,
    source,
    section,
    adx_keywords,
    url,
  } = article;

  const thumbnailUrl =
    media &&
    media[0] &&
    media[0]["media-metadata"] &&
    media[0]["media-metadata"][2]
      ? media[0]["media-metadata"][2].url
      : "";

  return (
    <StyledDetailsContainer data-cy="article-details">
      <StyledTitle>{title}</StyledTitle>
      <StyledByline>{byline}</StyledByline>
      <StyledPublishedDate>{published_date}</StyledPublishedDate>
      {thumbnailUrl && (
        <StyledMediaImage
          src={thumbnailUrl}
          alt={media && media[0] ? media[0].caption : ""}
        />
      )}
      <StyledAbstract>{abstract}</StyledAbstract>
      <StyledSource>Source: {source}</StyledSource>
      <StyledSection>Section: {section}</StyledSection>
      {adx_keywords && (
        <StyledKeywords>Keywords: {adx_keywords}</StyledKeywords>
      )}
      <StyledFullArticleLink
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read Full Article
      </StyledFullArticleLink>
    </StyledDetailsContainer>
  );
};

export default ArticleDetails;

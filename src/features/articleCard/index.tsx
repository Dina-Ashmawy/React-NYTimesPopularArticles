import React from "react";
import { Article } from "../../interfaces";
import {
  StyledLink,
  StyledCardContainer,
  StyledImage,
  StyledTitle,
  StyledInfo,
} from "./styled";

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const { id, title, published_date, section, media } = article;
  const thumbnailUrl = media?.[0]?.["media-metadata"]?.find(
    (media) => media.format === "Standard Thumbnail",
  )?.url;

  return (
    <StyledCardContainer>
      <StyledLink to={`/${id}`}>
        <StyledImage src={thumbnailUrl} alt={title} />
        <StyledTitle>{title}</StyledTitle>
        <StyledInfo>Published Date: {published_date}</StyledInfo>
        <StyledInfo>Section: {section}</StyledInfo>
      </StyledLink>
    </StyledCardContainer>
  );
};

export default ArticleCard;

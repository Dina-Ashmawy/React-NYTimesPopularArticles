import styled from "styled-components";
import {
  Breakpoints,
  DarkPurple,
  DefaultFontFamily,
  Gray,
  GrayDark,
  GrayDarker,
  GrayLighter,
  GrayLightest,
} from "../../css-vars";

export const StyledDetailsContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
  font-family: ${DefaultFontFamily};
  background-color: ${GrayLightest};
  color: ${GrayDarker};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  max-width: 100%;

  @media (min-width: ${Breakpoints.Small}) {
    padding: 24px;
  }

  @media (min-width: ${Breakpoints.Medium}) {
    max-width: 800px;
    padding: 32px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
  color: ${DarkPurple};
  background: linear-gradient(45deg, ${DarkPurple}, ${GrayDarker});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 28px;
  }

  @media (min-width: ${Breakpoints.Medium}) {
    font-size: 32px;
  }
`;

export const StyledByline = styled.p`
  font-size: 14px;
  color: ${GrayDark};
  margin-bottom: 8px;
  font-style: italic;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 16px;
  }
`;

export const StyledPublishedDate = styled.p`
  font-size: 14px;
  color: ${Gray};
  margin-bottom: 16px;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 16px;
  }
`;

export const StyledAbstract = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
  line-height: 1.5;
  color: ${GrayDarker};

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 18px;
  }

  @media (min-width: ${Breakpoints.Medium}) {
    font-size: 20px;
  }
`;

export const StyledMediaImage = styled.img`
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  margin-bottom: 16px;
  border: 1px solid ${GrayLighter};
  border-radius: 8px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: ${Breakpoints.Small}) {
    max-height: 400px;
  }

  @media (min-width: ${Breakpoints.Medium}) {
    max-height: 500px;
  }
`;

export const StyledSource = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${GrayDarker};
  margin-bottom: 8px;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 16px;
  }
`;

export const StyledSection = styled.p`
  font-size: 14px;
  color: ${GrayDark};
  margin-bottom: 8px;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 16px;
  }
`;

export const StyledKeywords = styled.p`
  font-size: 14px;
  color: ${Gray};
  margin-bottom: 16px;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 16px;
  }
`;

export const StyledFullArticleLink = styled.a`
  font-size: 16px;
  color: ${DarkPurple};
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  border: 1px solid ${DarkPurple};
  border-radius: 4px;
  transition:
    background-color 0.3s,
    color 0.3s;

  &:hover {
    background-color: ${DarkPurple};
    color: ${GrayLightest};
    text-decoration: underline;
  }
`;

import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Breakpoints,
  DarkPurple,
  DefaultFontFamily,
  GrayDark,
  GrayLighter,
} from "../../css-vars";

export const StyledContainer = styled.header`
  height: 64px;
  position: sticky;
  z-index: 1;
  top: 0;
  background-color: ${GrayLighter};
  margin-bottom: 30px;
  @media (min-width: ${Breakpoints.Medium}) {
    height: 96px;
  }
`;

export const StyledContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 30px;
`;

export const StyledAppName = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${DarkPurple};
  font-family: ${DefaultFontFamily};

  &:hover {
    color: ${GrayDark};
  }

  @media (min-width: ${Breakpoints.Medium}) {
    font-size: 28px;
  }

  @media (min-width: ${Breakpoints.Large}) {
    font-size: 32px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

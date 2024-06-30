import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  DefaultFontFamily,
  Gray,
  GrayDark,
  GrayLightest,
  Breakpoints,
} from "../../css-vars";

export const StyledCardContainer = styled.div`
  padding: 20px;
  background-color: ${GrayLightest};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  margin: 20px;
  text-align: center;
  max-width: 500px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  max-height: 200px;
  height: auto;
  object-fit: cover;
  border-radius: 8px 8px 8px 0;

  @media (min-width: ${Breakpoints.Small}) {
    max-width: 40%;
    border-radius: 8px 0 0 8px;
  }
`;

export const StyledTitle = styled.h2`
  color: ${GrayDark};
  font-size: 18px;
  font-family: ${DefaultFontFamily};
  margin-bottom: 8px;
  text-align: center;

  @media (min-width: ${Breakpoints.Small}) {
    font-size: 20px;
  }
`;

export const StyledInfo = styled.p`
  color: ${Gray};
  font-family: ${DefaultFontFamily};
  font-size: 14px;
  text-align: center;
  margin-bottom: 4px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: translateY(-3px);
  }
`;

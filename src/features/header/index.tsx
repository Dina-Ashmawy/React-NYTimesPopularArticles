import React from "react";
import {
  StyledContainer,
  StyledContent,
  StyledAppName,
  StyledLink,
} from "./styled";
const Header = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledLink to="/">
          <StyledAppName>NY Times Most Popular Articles</StyledAppName>
        </StyledLink>
      </StyledContent>
    </StyledContainer>
  );
};

export default Header;

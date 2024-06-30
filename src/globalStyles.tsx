import styled from "styled-components";
import { DarkPurple, DefaultFontFamily, GrayDarker } from "./css-vars";

const MessageBase = styled.p`
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  margin: 0;
  font-family: ${DefaultFontFamily};
  padding: 100px;
`;

export const StyledErrorMessage = styled(MessageBase)`
  color: ${GrayDarker};
`;

export const StyledLoadingMessage = styled(MessageBase)`
  color: ${DarkPurple};
`;

import styled from "styled-components";
import { DarkPurple, DefaultFontFamily } from "../../css-vars";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${DarkPurple};
`;

export const Heading = styled.h2`
  margin: 0;
  font-size: 18px;
  font-family: ${DefaultFontFamily};
`;

export const StyledSelect = styled.select`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 16px;
  width: 200px;
`;

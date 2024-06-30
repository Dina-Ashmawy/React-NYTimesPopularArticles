import React from "react";
import { PERIOD_VALUES } from "../../constants";
import { Container, Heading, StyledSelect } from "./styled";

interface PeriodSelectorProps {
  period: number;
  setPeriod: (period: number) => void;
}

const PeriodSelector: React.FC<PeriodSelectorProps> = ({
  period,
  setPeriod,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPeriod(Number(event.target.value));
  };

  return (
    <Container>
      <Heading>Select Period</Heading>
      <StyledSelect value={period} onChange={handleChange}>
        {PERIOD_VALUES.map((period) => (
          <option key={period.value} value={period.value}>
            {period.label}
          </option>
        ))}
      </StyledSelect>
    </Container>
  );
};

export default PeriodSelector;

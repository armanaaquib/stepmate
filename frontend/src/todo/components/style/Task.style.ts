import styled from "styled-components";

import colors from "../../../shared/style/colors";

const statusColors: Record<string, string> = {
  TODO: colors.secondaryDark,
  IN_PROGRESS: colors.progress,
  DONE: colors.primary,
};

const textColors: Record<string, string> = {
  TODO: colors.primaryDark,
  IN_PROGRESS: colors.primaryDark,
  DONE: colors.secondaryDark,
};

type StyledTaskProps = { status: string };

const StyledTask = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  background-color: ${colors.primaryLight};
  color: ${({ status }: StyledTaskProps) => textColors[status]};
  border-left-width: 2px;
  border-left-style: solid;
  border-left-color: ${({ status }: StyledTaskProps) => statusColors[status]};
  border-radius: 4px;
  padding: 4px;
`;

export default StyledTask;

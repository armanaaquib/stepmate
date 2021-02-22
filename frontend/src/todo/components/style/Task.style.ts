import styled from "styled-components";

import colors from "../../../shared/style/colors";

const statusColors: { [key: string]: string } = {
  TODO: "#f2f2f2",
  IN_PROGRESS: "#EEA940",
  DONE: colors.primary,
};

const textColors: { [key: string]: string } = {
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
  border-left: 8px solid
    ${({ status }: StyledTaskProps) => statusColors[status]};
  border-radius: 5px 2px 2px 5px;
  padding: 4px;
`;

export default StyledTask;

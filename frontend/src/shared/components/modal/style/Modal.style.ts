import styled, { createGlobalStyle } from "styled-components";
import colors from "../../../style/colors";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(102, 102, 102, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  min-height: 240px;
  max-height: 80%;
  min-width: 320px;
  max-width: 35%;
  z-index: 1000;
  background-color: ${colors.primaryLight};
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

const DisablePageScrollStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export { DisablePageScrollStyle, Overlay };
export default StyledModal;

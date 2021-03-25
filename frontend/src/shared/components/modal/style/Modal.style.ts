import styled, { createGlobalStyle } from "styled-components";
import colors from "../../../style/colors";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(102, 102, 102, 0.1);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  max-height: 70%;
  max-width: 80%;
  z-index: 1000;
  background-color: ${colors.primaryLight};
  border-radius: 5px;
  box-shadow: 0px 24px 38px rgba(0, 0, 0, 0.05),
    0px 9px 46px rgba(0, 0, 0, 0.05), 0px 11px 15px rgba(0, 0, 0, 0.05);

  animation: reveal 0.1s linear, slideDown 0.2s linear;
  @keyframes reveal {
    0% {
      opacity: 0.5;
    }

    100% {
      opacity: 1;
    }
  }
  @keyframes slideDown {
    0% {
      transform: translate3d(0, -4px, 0);
    }

    100% {
      transform: translate3d(0, 0, 0);
    }
  }
`;

const DisablePageScroll = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export { DisablePageScroll, Overlay };
export default StyledModal;

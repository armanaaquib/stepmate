import React, { ReactElement } from "react";

import StyledModal, {
  Overlay,
  DisablePageScrollStyle,
} from "./style/Modal.style";

type ModalProps = { children: React.ReactNode; show: boolean };

const Modal = ({ children, show }: ModalProps): ReactElement | null => {
  return show ? (
    <Overlay>
      <DisablePageScrollStyle />
      <StyledModal>{children}</StyledModal>
    </Overlay>
  ) : null;
};

export default Modal;

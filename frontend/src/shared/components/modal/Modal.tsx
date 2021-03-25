import React, { createRef, ReactElement, MouseEvent } from "react";

import StyledModal, { Overlay, DisablePageScroll } from "./style/Modal.style";

type ModalProps = {
  children: React.ReactNode;
  show: boolean;
  onOverlayClick: () => void;
};

const isClickOutsideModal = (
  clickedElement: EventTarget | null,
  element: HTMLElement | null
) => {
  return (
    element &&
    clickedElement instanceof Node &&
    !element.contains(clickedElement)
  );
};

const Modal = ({
  children,
  show,
  onOverlayClick,
}: ModalProps): ReactElement | null => {
  const modalRef = createRef<HTMLDivElement>();

  const onOverlayClickHandler = (event: MouseEvent) => {
    if (isClickOutsideModal(event.target, modalRef.current)) {
      onOverlayClick();
    }
  };

  return show ? (
    <Overlay onClick={onOverlayClickHandler} aria-label="overlay">
      <DisablePageScroll />
      <StyledModal ref={modalRef} aria-label="modal">
        {children}
      </StyledModal>
    </Overlay>
  ) : null;
};

export default Modal;

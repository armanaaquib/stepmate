import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Modal from "../../../../src/shared/components/modal/Modal";

describe("<Modal />", () => {
  it("should show modal when show is true", () => {
    render(
      <Modal show={true} onOverlayClick={jest.fn()}>
        modal content
      </Modal>
    );

    expect(screen.getByText(/modal content/)).toBeInTheDocument();
  });

  it("should not show modal when show is false", () => {
    render(
      <Modal show={false} onOverlayClick={jest.fn()}>
        modal content
      </Modal>
    );

    expect(screen.queryByText(/modal content/)).not.toBeInTheDocument();
  });

  it("should not call onOverlayClickHandler on clikcking the modal", () => {
    const onOverlayClickHandler = jest.fn();
    render(
      <Modal show={true} onOverlayClick={onOverlayClickHandler}>
        modal content
      </Modal>
    );

    userEvent.click(screen.getByLabelText("modal"));

    expect(onOverlayClickHandler).not.toHaveBeenCalled();
  });

  it("should call onOverlayClickHandler on clicking outside the modal", () => {
    const onOverlayClickHandler = jest.fn();
    render(
      <Modal show={true} onOverlayClick={onOverlayClickHandler}>
        modal content
      </Modal>
    );

    userEvent.click(screen.getByLabelText("overlay"));

    expect(onOverlayClickHandler).toHaveBeenCalledTimes(1);
  });

  it("should render modal content", () => {
    const onOverlayClickHandler = jest.fn();
    render(
      <Modal show={true} onOverlayClick={onOverlayClickHandler}>
        modal content
      </Modal>
    );

    expect(
      within(screen.getByLabelText("modal")).getByText(/modal content/)
    ).toBeInTheDocument();
  });
});

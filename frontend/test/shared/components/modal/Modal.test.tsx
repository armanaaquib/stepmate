import React from "react";
import { render, screen } from "@testing-library/react";

import Modal from "../../../../src/shared/components/modal/Modal";

describe("<Modal />", () => {
  it("should show modal when show is true", () => {
    render(<Modal show={true}>modal content</Modal>);

    expect(screen.getByText(/modal content/)).toBeInTheDocument();
  });

  it("should not show modal when show is false", () => {
    render(<Modal show={false}>modal content</Modal>);

    expect(screen.queryByText(/modal content/)).not.toBeInTheDocument();
  });
});

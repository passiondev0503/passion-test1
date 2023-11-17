import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { MemoryRouter } from "react-router-dom";

import { App, WrappedApp } from "@/App";

describe("App", () => {
  it("should render Hello World", () => {
    render(<WrappedApp />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Hello World"
    );
  });

  it("should render Not Found if the path is invalid", () => {
    render(
      <MemoryRouter initialEntries={["/invalid-path-999"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "404 Not Found"
    );
  });
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CountButton } from "./count-button";
import { useCounterStore } from "#/stores/useCounterStore";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("count-button", () => {
  beforeEach(() => {
    useCounterStore.setState({ counter: 0 });
  });
  it("The counter is incremented when you click increment", async () => {
    render(<CountButton />);

    await userEvent.click(screen.getByRole("button", { name: /increment/i }));
    expect(useCounterStore.getState().counter).toBe(1);
  });

  it("clicking reset resets the counter.", async () => {
    useCounterStore.setState({ counter: 5 });
    render(<CountButton />);

    await userEvent.click(screen.getByRole("button", { name: /reset/i }));

    expect(useCounterStore.getState().counter).toBe(0);
  });
});

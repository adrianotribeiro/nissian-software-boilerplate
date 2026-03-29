// src/test/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "../components/ui/button";

test("renderiza o botão", () => {
  render(<Button>Click me</Button>);
  expect(screen.getByText("Click me")).toBeInTheDocument();
});

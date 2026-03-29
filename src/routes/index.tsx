import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/hero/hero";

function HomeComponent() {
  return (
    <>
      <Hero />
    </>
  );
}

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

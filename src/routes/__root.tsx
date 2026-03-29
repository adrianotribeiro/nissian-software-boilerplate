import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <main>
      <div
        className="min-h-screen text-white antialiased flex items-center justify-center"
        style={{
          fontFamily: "Inter, sans-serif",
          backgroundColor: "#0D0D0D",
        }}
      >
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </main>
  ),
});

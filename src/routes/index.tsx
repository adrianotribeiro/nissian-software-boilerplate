import { CountButton } from "#/component/count-button/count-button.tsx";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <section className="flex flex-col items-center justify-center h-screen ">
      <h1 className="mb-3 font-grotesk text-title-name tracking-[-0.045em] leading-[0.92] font-extrabold text-9xl">
        Nissian
      </h1>
      <span className="inline-block text-9xl text-transparent [-webkit-text-stroke:2px_#ffffff2d]">
        SOFTWARE
      </span>
      <div>
        <span className="text-9xl font-grotesk text-boiler">BOILER</span>
        <span className="text-9xl font-grotesk text-plate">PLATE</span>
      </div>
      <CountButton />
    </section>
  );
}

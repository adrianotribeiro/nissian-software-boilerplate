import type { KnipConfig } from "knip";

const config: KnipConfig = {
  ignoreDependencies: [
    "@tanstack/*",
    "tailwindcss",
    "@tailwindcss/*",
    "zod",
    "@fontsource*",
    "tw-animate-css",
    "lucide-react",
  ],
  entry: [
    "src/main.tsx",
    "src/routes/**/*",
    "src/router.tsx",
    "src/styles.css",
  ],
};

export default config;

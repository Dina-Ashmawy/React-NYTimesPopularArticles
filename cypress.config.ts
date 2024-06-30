import { defineConfig } from "cypress";

export default defineConfig({
  fileServerFolder: "public",
  fixturesFolder: "cypress/fixtures",
  video: true,
  viewportHeight: 900,
  viewportWidth: 1440,

  e2e: {
    baseUrl: `http://localhost:5173/`,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});

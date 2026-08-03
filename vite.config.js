import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      "/api": {
        target:
          "https://reimagined-succotash-5v7w65q45pwfvj6w-3001.app.github.dev",

        changeOrigin: true,
        secure: true
      }
    }
  }
});
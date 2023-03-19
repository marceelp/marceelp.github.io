import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Testing tomorrow morning if this change below worked
  build: {
    minify: false,
  },
});

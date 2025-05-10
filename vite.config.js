import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "swiper-vendor": ["swiper"],
          "react-icons-vendor": ["react-icons"],
          // Add more chunks as needed
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Adjust the limit as needed
  },
});

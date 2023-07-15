import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteCompression(), ViteImageOptimizer(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.indexOf("node_modules") !== -1) {
            if (id.indexOf("@chakra-ui") !== -1) {
              return "vendor_chakra";
            }
            return "vendor";
          }
        },
      },
    },
  },
});

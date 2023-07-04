import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import { visualizer } from "rollup-plugin-visualizer";

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
            } else if (id.indexOf("react-icons") !== -1) {
              return "vendor_react_icons";
            } else if (id.indexOf("react-simple-image-slider") !== -1) {
              return "vendor_react-simple-image-slider";
            }
            return "vendor";
          }
        },
      },
    },
  },
});

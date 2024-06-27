import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import compression from "vite-plugin-compression";
// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    compression({
      algorithm: "gzip", // you can also use 'brotliCompress'
      ext: ".gz", // file extension
      deleteOriginFile: false, // delete original files after compression
    }),
  ],
  server: {
    port: 1026,
  },
});

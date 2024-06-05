import { resolve } from "path";
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "@matiasnl23/vite-publish-test",
      fileName: 'vite-publish-test',
    },
  }
})

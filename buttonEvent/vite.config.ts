import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcssPresetEnv from "postcss-preset-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 0,
          features: {
            "logical-properties-and-values": false,
            "prefers-color-scheme-query": false,
            "gap-properties": false,
            "custom-properties": false,
            "is-pseudo-class": false,
            "focus-within-pseudo-class": false,
            "focus-visible-pseudo-class": false,
            "color-functional-notation": false,
            "cascade-layers": false,
            "double-position-gradients": false,
            "has-pseudo-class": false,
          },
        }),
      ],
    },
  },
});

import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id: string) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // 🚨关键修复 1：强制 Vite 预构建 antd
  optimizeDeps: {
    include: ["antd", "@ant-design/icons"],
  },

  // 🚨关键修复 2：避免 SSR / Vercel 解析问题
  ssr: {
    noExternal: ["antd"],
  },

  assetsInclude: ["**/*.svg", "**/*.csv"],
});
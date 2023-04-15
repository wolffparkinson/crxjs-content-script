import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { crx, defineManifest } from "@crxjs/vite-plugin";
import path, { resolve } from 'path';

const manifest = defineManifest({
  manifest_version: 3,
  name: "test-react-vite-4",
  version: "1.0.0",
  action: { default_popup: "index.html" },
  background:{type:'module',service_worker:'src/background/index.ts'},
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({
      manifest,
    }),
  ],
  build:{
    emptyOutDir:true,
    rollupOptions:{
      input:{
        script:resolve(__dirname,'src','content','script.ts')
      }
    }
  }
});

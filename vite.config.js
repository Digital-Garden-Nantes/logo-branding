import { defineConfig } from 'vite'
import path from 'path'


export default defineConfig({
  build: {
    outDir: 'dist', 
    cssCodeSplit: false,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/main.ts'), 
      output: {
        dir: path.resolve(__dirname, 'dist'),
        entryFileNames: 'logo-branding.min.js',
        chunkFileNames: 'logo-branding.min.js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'logo-branding.min.[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
})
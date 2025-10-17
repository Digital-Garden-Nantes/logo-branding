import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: './src/main.ts',
            name: 'LogoBranding',
            fileName: () => 'logo-branding.js',
            formats: ['iife']
        },
        rollupOptions: {
            output: {
                assetFileNames: (assetInfo) => {
                    if (assetInfo.names && assetInfo.names[0] === 'style.css') {
                        return 'logo-branding.css';
                    }
                    return assetInfo.names?.[0] || 'assets/[name].[ext]';
                }
            }
        }
    }
});

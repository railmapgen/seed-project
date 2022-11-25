import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';

// https://vitejs.dev/config
export default defineConfig({
    base: '/seed-project/',
    plugins: [
        react(),
        checker({ typescript: true, eslint: { lintCommand: 'eslint ./src' } }),
        splitVendorChunkPlugin(),
    ],
});

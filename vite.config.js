import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx', // Entry point
            refresh: true, // Enables HMR
        }),
        react(),
    ],
    server: {
        host: 'localhost',
        port: 3000, // Vite runs on this port
        hmr: {
            host: 'localhost',
        },
    },
    build: {
        outDir: 'public/build',
    },
});

import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react(), tailwindcss()],
    build: {
        emptyOutDir: true
    },
    server: {
        proxy: {
            '/api': {
                target: 'http://127.0.0.1:5000',
                changeOrigin: true
            }
        },
        host: '0.0.0.0'
    },
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src')
            }
        ]
    }
});

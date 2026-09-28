import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
    plugins: [react()],
    server: {
        port: 5177,
        //host: '3bd5-206-62-143-65.ngrok-free.app'
    },
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   base: 'https://github.com/KayodeOguntala/react_project2.git',
   server: {
    port: 5173, 
    host: true  
   
  }
})

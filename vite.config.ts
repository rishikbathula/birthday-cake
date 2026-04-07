import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // REPLACE 'birthday-cake-from-crush' with your actual GitHub repo name 
  // if you renamed it. It MUST have the slashes like this: /repo-name/
  base: '/birthday-cake/',
  
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  server: {
    // This helps with local testing on your Mac
    port: 5173,
    host: true
  }
})
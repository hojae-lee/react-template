import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@common': path.resolve(__dirname, './src/common'),
      '@layouts': path.resolve(__dirname, './src/layouts'),
      '@entities': path.resolve(__dirname, './src/entities')
    }
  },
  // scss 전역 사용
  css: {
    postcss: './postcss.config.cjs',
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/scss/main.scss";`
      }
    }
  }
})

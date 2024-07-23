import { defineConfig, UserConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { UserConfig as VitestUserConfig } from 'vitest/config'

interface CustomUserConfig extends UserConfig {
  test?: VitestUserConfig['test']
}

export default defineConfig(({}): CustomUserConfig => {
  const config: CustomUserConfig = {
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
    css: {
      postcss: './postcss.config.cjs',
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/assets/styles/scss/main.scss";`
        }
      }
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts'
    }
  }

  return config
})

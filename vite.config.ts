import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import alias from '@rollup/plugin-alias';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // '~': path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  plugins: [vue(),
  alias({
    entries: {
      '_PLGN_': path.resolve(__dirname, './src/plugin'),
      '_LESS_': path.resolve(__dirname, './src/assets/less'),
      '_IMG_': path.resolve(__dirname, './src/assets/img'),
      '_ROUTER_': path.resolve(__dirname, './src/router'),
      '_PAGE_': path.resolve(__dirname, './src/page'),
      '_VIEWS_': path.resolve(__dirname, './src/views'),
      '_COMP_': path.resolve(__dirname, './src/components'),
      '_STORE_': path.resolve(__dirname, './src/store'),
      '_API_': path.resolve(__dirname, './src/api'),
      '_TYPE_': path.resolve(__dirname, './src/types'),
      '_LAYOUT_': path.resolve(__dirname, './src/layout'),
    }
  }),

  ]
})

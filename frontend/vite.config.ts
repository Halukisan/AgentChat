import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  server: {
    host: '10.81.18.218',
    port: 8991,
    // 是否开启 https
    https: false,
      // 设置反向代理，跨域
      proxy: {
        // '/assets': {
        //     target: 'http://192.168.103.146:8880',
        //     changeOrigin: true,
        // },
        '/api': {
          target: 'http://10.81.19.56:8880/',
          changeOrigin: true,
      }
    },
  },
  plugins: [vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  
})

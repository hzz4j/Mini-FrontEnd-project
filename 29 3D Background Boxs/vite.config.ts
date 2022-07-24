import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'


function wrapper(url: string | URL){
    console.log('我配置的输出import.meta.url',url)
    const re = fileURLToPath(new URL('./src',url))
    console.log("处理后的结果过",re);
    
    return re
}

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': wrapper(import.meta.url)
    }
  }
})



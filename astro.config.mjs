import { defineConfig, sharpImageService } from 'astro/config';

export default defineConfig({
  site: 'https://frk.tw',
  image: {
    service: sharpImageService(),
  },
  vite: {
    resolve: {
      alias: {
        '@images': '/src/images', // 修正路徑問題
      },
    },
  },
});
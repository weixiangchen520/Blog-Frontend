import { defineConfig } from 'umi';
import routes from './routes';
import pluginConfig from './plugin';

export default defineConfig({
  title: '博客管理系统',
  favicon: '/logo.png',
  routes,
  nodeModulesTransform: {
    type: 'none',
  },
  fastRefresh: {},
  proxy: {
    '/api': {
        'target': 'http://localhost:8080/',
        'changeOrigin': true,
        'pathRewrite': { '^/api' : '' },
      },
  },
  ...pluginConfig
});

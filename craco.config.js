const CracoLessPlugin = require('craco-less');
const { whenDev, whenProd, when } = require('@craco/craco');
const fastRefreshCracoPlugin = require('craco-fast-refresh');
const path = require('path');
const lessModuleRegex = /\.module\.less$/;
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
const prodPlugin = [];
// 生产环境去除打印
if (process.env.NODE_ENV === 'production') {
  // 如果是生产环境，则自动清理掉打印的日志，但保留error 与 warn
  prodPlugin.push([
    'transform-remove-console',
    {
      // 保留 console.error 与 console.warn
      exclude: ['error', 'warn']
    }
  ]);
}
module.exports = {
  title: 'Demo',
  webpack: {
    alias: {
      '@': pathResolve('src'),
      '@styles': pathResolve('src/styles'),
      '@assets': pathResolve('src/assets'),
      '@components': pathResolve('src/components'),
      '@pages': pathResolve('src/pages'),
      '@store': pathResolve('src/store'),
      '@utils': pathResolve('src/utils')
    }
  },
  devServer: {
    open: false,
    historyApiFallback: true,
    proxy: {
      // '/api': {
      //   target: 'http://localhost:3001',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '/api'
      //   }
      // }
    }
  },
  babel: {
    plugins: [
      [
        'import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es'
        },
        'antd'
      ],
      ['@babel/plugin-proposal-decorators', { legacy: true }],
      // 去除打印
      // ['transform-remove-console', { exclude: ['error', 'warn'] }]
      ...prodPlugin
    ]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // less loader options
        lessLoaderOptions: {
          lessOptions: {
            /*
                    如果项目中有使用TDesign或AntDesign组件库需要自定义主题，可以在modifyVars中添加对应less变量
                */
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true
          }
        },

        // A callback function that receives two arguments: the webpack rule,
        // and the context. You must return an updated rule object.
        modifyLessRule: (lessRule, context) => {
          lessRule.test = lessModuleRegex;
          lessRule.exclude = /node_modules|antd\.css/;
          return lessRule;
        },

        // Passing an options object to configure the css-loaders
        cssLoaderOptions: {
          modules: { localIdentName: '[local]_[hash:base64:5]' }
        }
      }
    }
    // ...whenDev(
    //   () => [
    //     {
    //       plugin: fastRefreshCracoPlugin// 快速更新 未找到原因
    //     }
    //   ],
    //   []
    // )
  ],
  resolve: {
    // 以下配置会将没指定拓展名的文件按如下类型查找匹配
    extensions: ['*', '.js', '.jsx', '.tsx', '.ts'],
    // 设置别名
    alias: {
      '@': path.resolve(__dirname, '../src') // 这样配置后 @ 可以指向 src 目录
    }
  }
};

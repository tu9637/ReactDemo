const CracoLessPlugin = require('craco-less');
const path = require('path');
const lessModuleRegex = /\.module\.less$/;
const pathResolve = (pathUrl) => path.join(__dirname, pathUrl);
module.exports = {
  title: 'Demo',
  webpack: {
    alias: {
      '@': pathResolve('src')
    }
  },
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        // less loader options
        lessLoaderOptions: {
          lessOptions: {
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

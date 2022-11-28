const CracoLessPlugin = require('craco-less');
const path = require('path');
const lessModuleRegex = /\.module\.less$/;
module.exports = {
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
    alias: {
      '@': /* path.join(__dirname, */ './src'/* ) */
    }
  },
  open: false
};

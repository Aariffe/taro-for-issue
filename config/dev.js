const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
    webpackChain (chain, webpack) {
      chain.merge({
        module: {
          rule: {
            myLoader: {
              test: /\.js$/,
              use: [{
                loader: 'eslint-loader',
                options: {
                  exclude: /node_modules/,
                  fix: false,
                }
              }]
            },
          }
        },
      })
    },
  },
  h5: {
    esnextModules: ['taro-ui']
  }
}

var webpack = require('webpack');

// webpack.config.js
module.exports = {
  resolve: {
          extensions: ['','.webpack.js', '.web.js', '.js']
      },
      devtool: 'source-map',

      plugins: [
        new webpack.optimize.UglifyJsPlugin()
      ],

      // Your app configuration
      entry: {
          main: ['./assets/js/medida.js']
      },
      output: {
          path: require("path").resolve('./vendor'),
          filename: '[name].js' // Template based on keys in entry above
      }
};

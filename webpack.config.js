const { resolve } = require('path');
const { merge } = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

const ENV = process.argv.find(arg => arg.includes('development'))
  ? 'development'
  : 'production';
const OUTPUT_PATH = ENV === 'production' ? resolve('dist') : resolve('src');
const INDEX_TEMPLATE = resolve('index.html');

const assets = [
  {
    from: 'images',
    to: 'images',
  },
  {
    from: 'manifest.json',
    to: 'manifest.json',
  }
];

const helpers = [];

const polyfills = [
  {
    from: 'node_modules/@webcomponents/webcomponentsjs',
    to: 'node_modules/@webcomponents/webcomponentsjs',
  },
];

const commonConfig = merge([
  {
    devServer: {
      historyApiFallback: {
        disableDotRule: true,
      },
    },
    mode: ENV,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    '@babel/preset-env',
                    { targets: 'last 2 version, not dead' },
                  ],
                ],
                plugins: ['@babel/plugin-syntax-dynamic-import'],
              },
            },
          ],
        },
        
      ],
    },
    resolve: {
      extensions: ['.js'],
    },
  },
]);

const developmentConfig = merge([
  {
    devtool: 'inline-source-map', //'inline-source-map' se puso eval para probar pero siempre ha ido inline
    plugins: [
      new CopyWebpackPlugin({ patterns: [...polyfills, ...helpers, ...assets], }),
      new HtmlWebpackPlugin({
        chunksSortMode: 'none',
        template: INDEX_TEMPLATE,
      }),
    ],
  },
]);

const productionConfig = merge([
  {
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            output: {
              comments: false,
            },
          },
        }),
      ],
    },
    plugins: [
      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [OUTPUT_PATH],
        verbose: true,
      }),
      new CopyWebpackPlugin({
        patterns: [...polyfills, ...helpers, ...assets],
      }),
      new HtmlWebpackPlugin({
        chunksSortMode: 'none',
        template: INDEX_TEMPLATE,
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          minifyCSS: true,
          minifyJS: true,
        },
      }),
      new WorkboxPlugin.GenerateSW({
        clientsClaim: true,
        skipWaiting: true,
        swDest: 'service-worker-katia.js',
        navigateFallback: 'index.html',
        runtimeCaching: [
          {
            urlPattern: new RegExp('https://fonts.gstatic.com/'),
            handler: 'CacheFirst',
          },
          {
            urlPattern: new RegExp('https://fonts.googleapis.com/'),
            handler: 'CacheFirst',
          },
          {
            urlPattern: new RegExp(
              'node_modules/@webcomponents/webcomponentsjs/',
            ),
            handler: 'StaleWhileRevalidate',
          },
        ],
      }),
    ],
  },
]);

module.exports = (mode) => {
  if (ENV === 'production') {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};

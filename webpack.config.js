const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

const mode = process.env.NODE_ENV || "development";

const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;


module.exports = {
  mode,
  target,
  devtool,
  entry: path.resolve(__dirname, "src", "index.ts"),
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "index.[contenthash].js",
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      src: path.resolve(__dirname, 'src'),
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      types: path.resolve(__dirname, 'src', 'types'),
      utils: path.resolve(__dirname, 'src', 'utils'),
      controller: path.resolve(__dirname, 'src', 'components', 'controller'),
      model: path.resolve(__dirname, 'src', 'components', 'model'),
      view: path.resolve(__dirname, 'src', 'components', 'view'),
    }
  },
  devServer: {
    open: true,
    hot: true,
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
      scriptLoading: "module",
    }),
    new MiniCssExtractPlugin({
      filename: "index.[contenthash].css"
    }),
    new ESLintWebpackPlugin(),
   ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [ "postcss-preset-env" ],
              }
            }
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(j|t)s$/i,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.(svg|png|jpe?g|gif|webp|ico)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/img/[name][ext]',
        },
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assets/fonts/[name][ext]',
        },
      },
    ],
  },
}
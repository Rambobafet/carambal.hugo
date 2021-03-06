import webpack from "webpack";
import path from "path";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";

export default {
  module: {
    rules: [
      {
        test: /\.((png)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file-loader?name=/[hash].[ext]",
      },
      {
        test: /\.json$/,
        loader: "json-loader",
      },
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {cacheDirectory: true},
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      fetch: "imports-loader?this=>global!exports?global.fetch!whatwg-fetch",
    }),
    new UglifyJsPlugin(),
  ],

  context: path.join(__dirname, "src"),
  devtool: "source-map",

  entry: {
    app: ["./js/app"],
  },

  output: {
    path: path.join(__dirname, "dist/js"),
    publicPath: "/js",
    filename: "[name].js",
  },

  externals: [/^vendor\/.+\.js$/],
};

const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");
const path = require("path");
const Dotenv = require("dotenv-webpack");
require("dotenv").config();

module.exports = {
  mode: "production",
  entry: {
    main: "./src/index.js",
    other: "./src/other.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: "all",
      // Ensure the bundles are completely independent
      cacheGroups: {
        defaultVendors: false,
        default: false,
      },
    },
  },
  devtool: "source-map",
  plugins: [
    new Dotenv(),
    sentryWebpackPlugin({
      org: "XXX",
      project: "XXX",
      release:  process.env.VERSION || "1.0.1",
      include: "./dist",
      authToken: process.env.SENTRY_AUTH_TOKEN_2,
    }),
  ],
};

import path from "path";
import webpack from "webpack";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";

const config: webpack.Configuration = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
         use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true, // Ignore TypeScript errors
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false, // Prevent blocking Webpack builds
      logger: {
        issues: "none", // Ignore TypeScript errors in the console
      },
    }),
  ],
};

export default config;

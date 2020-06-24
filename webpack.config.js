const path = require("path");
// http://webpack.github.io/docs/configuration.html
module.exports = {
  mode: "production",

  entry: {
    main: "./src/main.ts",
  },

  // Outputs compiled bundle to `./web/js/main.js`
  output: {
    path: path.resolve(__dirname + "/web/"),
    filename: "js/[name].js",
  },

  resolve: {
    extensions: [".ts", ".js"],

    // Shortcuts to avoid up-one-level hell:
    // Turns "../../../utils" into "Utils"
    alias: {
      "@Entities": path.resolve(__dirname, "./src/entities/"),
    },
  },

  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/, /tsOld/],
        loader: "ts-loader",
      },
    ],
  },

  // Enables dev server to be accessed by computers in local network
  devServer: {
    contentBase: "web",
    host: "0.0.0.0",
    port: 8000,
    disableHostCheck: true,
    open: true,
  },
};

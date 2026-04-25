// webpack.config.js
import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: "development",
  entry: {
    main: "./src/index.js",
    accommodation: "./src/accommodation.js",
    standard1: "./src/ppr_rooms/standard1.js",
    superior1: "./src/ppr_rooms/superior1.js",
    superior2: "./src/ppr_rooms/superior2.js",
    deluxe1a:  "./src/ppr_rooms/deluxe1a.js",
    deluxe1b:  "./src/ppr_rooms/deluxe1b.js",
    deluxe2:   "./src/ppr_rooms/deluxe2.js",
    grand2:    "./src/ppr_rooms/grand2.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/accommodation.html",
      filename: "accommodation.html",
      chunks: ["accommodation"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/standard1.html",
      filename: "standard1.html",
      chunks: ["standard1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior1.html",
      filename: "superior1.html",
      chunks: ["superior1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior2.html",
      filename: "superior2.html",
      chunks: ["superior2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1a.html",
      filename: "deluxe1a.html",
      chunks: ["deluxe1a"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1b.html",
      filename: "deluxe1b.html",
      chunks: ["deluxe1b"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe2.html",
      filename: "deluxe2.html",
      chunks: ["deluxe2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/grand2.html",
      filename: "grand2.html",
      chunks: ["grand2"],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp)$/i,
        type: "asset/resource",
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
};
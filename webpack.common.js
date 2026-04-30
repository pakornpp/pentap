// webpack.config.js
import path from "node:path";
import { fileURLToPath } from "node:url";
import HtmlWebpackPlugin from "html-webpack-plugin";
import CopyWebpackPlugin from "copy-webpack-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
  mode: "development",
  entry: {
    main: "./src/index.js",
    accommodation: "./src/accommodation.js",
    warehouse: "./src/warehouse.js",
    contact: "./src/contact.js",
    standard1: "./src/ppr_rooms/standard1.js",
    superior1: "./src/ppr_rooms/superior1.js",
    superior2: "./src/ppr_rooms/superior2.js",
    deluxe1a:  "./src/ppr_rooms/deluxe1a.js",
    deluxe1b:  "./src/ppr_rooms/deluxe1b.js",
    deluxe2:   "./src/ppr_rooms/deluxe2.js",
    grand2:        "./src/ppr_rooms/grand2.js",
    pphStandard:   "./src/pph_rooms/standard.js",
    pphVip:        "./src/pph_rooms/vip.js",
    ppaStudio:     "./src/ppa_rooms/studio.js",
    ppaVip:        "./src/ppa_rooms/vip.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "[path][name][ext]",
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
      template: "./src/warehouse.html",
      filename: "warehouse.html",
      chunks: ["warehouse"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "contact.html",
      chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/standard1.html",
      filename: "ppr-standard1.html",
      chunks: ["standard1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior1.html",
      filename: "ppr-superior1.html",
      chunks: ["superior1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior2.html",
      filename: "ppr-superior2.html",
      chunks: ["superior2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1a.html",
      filename: "ppr-deluxe1a.html",
      chunks: ["deluxe1a"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1b.html",
      filename: "ppr-deluxe1b.html",
      chunks: ["deluxe1b"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe2.html",
      filename: "ppr-deluxe2.html",
      chunks: ["deluxe2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/grand2.html",
      filename: "ppr-grand2.html",
      chunks: ["grand2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pph_rooms/standard.html",
      filename: "pph-standard.html",
      chunks: ["pphStandard"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pph_rooms/vip.html",
      filename: "pph-vip.html",
      chunks: ["pphVip"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppa_rooms/studio.html",
      filename: "ppa-studio.html",
      chunks: ["ppaStudio"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppa_rooms/vip.html",
      filename: "ppa-vip.html",
      chunks: ["ppaVip"],
    }),

    // ── English (/en/) versions ──────────────────────────────────────────────
    // Same templates and JS chunks as the Thai (root) versions.
    // Language is set to English at runtime by i18n.js detecting /en/ in the URL.
    new HtmlWebpackPlugin({
      template: "./src/template.html",
      filename: "en/index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/accommodation.html",
      filename: "en/accommodation.html",
      chunks: ["accommodation"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/warehouse.html",
      filename: "en/warehouse.html",
      chunks: ["warehouse"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/contact.html",
      filename: "en/contact.html",
      chunks: ["contact"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/standard1.html",
      filename: "en/ppr-standard1.html",
      chunks: ["standard1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior1.html",
      filename: "en/ppr-superior1.html",
      chunks: ["superior1"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/superior2.html",
      filename: "en/ppr-superior2.html",
      chunks: ["superior2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1a.html",
      filename: "en/ppr-deluxe1a.html",
      chunks: ["deluxe1a"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe1b.html",
      filename: "en/ppr-deluxe1b.html",
      chunks: ["deluxe1b"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/deluxe2.html",
      filename: "en/ppr-deluxe2.html",
      chunks: ["deluxe2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppr_rooms/grand2.html",
      filename: "en/ppr-grand2.html",
      chunks: ["grand2"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pph_rooms/standard.html",
      filename: "en/pph-standard.html",
      chunks: ["pphStandard"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/pph_rooms/vip.html",
      filename: "en/pph-vip.html",
      chunks: ["pphVip"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppa_rooms/studio.html",
      filename: "en/ppa-studio.html",
      chunks: ["ppaStudio"],
    }),
    new HtmlWebpackPlugin({
      template: "./src/ppa_rooms/vip.html",
      filename: "en/ppa-vip.html",
      chunks: ["ppaVip"],
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: "./src/sitemap.xml", to: "sitemap.xml" },
        { from: "./src/robots.txt",  to: "robots.txt"  },
      ],
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
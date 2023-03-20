const path = require('path');

module.exports = {
  entry:
  {
    index: "./src/js/index.js",
  },
  mode: "production",
  output: 
  {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js",
  },
};
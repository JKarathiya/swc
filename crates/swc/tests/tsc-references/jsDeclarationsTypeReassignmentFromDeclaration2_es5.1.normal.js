module.exports = getItems;
// @filename: index.js
var items = require("./some-mod")();
module.exports = items;
// @allowJs: true
// @checkJs: true
// @outDir: ./out
// @lib: es6
// @declaration: true
// @filename: some-mod.d.ts
export { };
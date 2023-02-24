var path = require('path');
var fjsparse = require("@ferrugemjs/compile/parse/parse");

module.exports = function (source) {
    var pathTmp = this.resourcePath.match(/(\w|[-.])+$/g)[0];
    pathTmp = pathTmp.substring(0, pathTmp.lastIndexOf("."));
    return fjsparse.default(source, {
        env: this.query.env || "development",
        resourcePath: path.relative(__dirname, this.resourcePath).replace('../../', '').replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, ''),
        viewModel: pathTmp,
        templateExtension: this.query.templateExtension || ".html"
    })
};

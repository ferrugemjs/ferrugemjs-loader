var fjsparse = require("ferrugemjs-node");
var path = require('path');

module.exports = function (source) {
    var pathTmp = this.resourcePath.match(/(\w|[-.])+$/g)[0];
    pathTmp = pathTmp.substring(0, pathTmp.lastIndexOf("."));
    return fjsparse(source, {
        env: this.query.env || "development",
        resourcePath: path.relative(__dirname, this.resourcePath).replace('../../', ''),
        viewModel: pathTmp,
        templateExtension: this.query.templateExtension || ".html"
    })
};

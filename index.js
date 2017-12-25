var fjsparse = require("ferrugemjs-node");

module.exports = function(source) {
    var pathTmp = this.resourcePath.match(/(\w|[-.])+$/g)[0];
    pathTmp = pathTmp.substring(0,pathTmp.lastIndexOf("."));
    return fjsparse(source,{viewModel:pathTmp,templateExtension:this.query.templateExtension})
};
var fjsparse = require("ferrugemjs-node");
var loaderUtils = require("loader-utils");

module.exports = function(source) {
    var options = loaderUtils.getOptions(this);
    return fjsparse(source,{viewModel:options.viewModel})
};

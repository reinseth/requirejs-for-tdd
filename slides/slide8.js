





var factories = {};
var execCb = require.s.contexts._.execCb;

require.s.contexts._.execCb = function(name, factory) {
    factories[name] = factory;
    return execCb.apply(this, arguments);
};


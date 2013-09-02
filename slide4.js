



/**
 *
 * Utfordringer:
 *
 * - initialisering
 * - avhengigheter som er funksjoner
 * - state
 *
 */



// lib/autoMock.js
var Modules = (function(root) {
    var require = root.require;
    var factories = {};
    var execCb = require.s.contexts._.execCb;

    require.s.contexts._.execCb = function(name, factory) {
        factories[name] = factory;
        return execCb.apply(this, arguments);
    };

    return {
        has: function(name) {
            return !!factories[name];
        },
        init: function(name, customRequire) {
            return factories[name](customRequire || require);
        }
    };
})(root);

// (...)

function autoMock(moduleName, options) {
    options = options || {};
    options.mocks = options.mocks || {};
    options.passthrough = options.passthrough || [];
    options.includes = options.includes || [];

    if (!Modules.has(moduleName)) {
        throw 'Module "' + moduleName + '" has not yet been defined.';
    }

    var dependencies = {};

    var requireFacade = jasmine.createSpy('require').andCallFake(function(deps, callback) {
        var result;

        if (Objects.isString(deps)) {
            deps = [deps];
        }

        result = Arrays.map(deps, function(dependencyName) {
            var result;

            if (dependencies[dependencyName]) {
                return dependencies[dependencyName];
            }

            if (options.mocks[dependencyName]) {
                result = options.mocks[dependencyName];
            } else if (ModuleNames.isIncluded(options.passthrough, dependencyName)) {
                result = require(dependencyName);
            } else if (ModuleNames.isIncluded(options.includes, dependencyName)) {
                result = Modules.init(dependencyName, requireFacade);
            } else {
                result = mock(require(dependencyName), dependencyName);
            }

            dependencies[dependencyName] = result;

            return result;
        });

        if (callback) {
            callback.apply(null, result);
            return result;
        } else {
            return result[0];
        }
    });

    var module = Modules.init(moduleName, requireFacade);

    jasmine.getEnv().getMockFor = function(dependencyPath) {
        if (dependencyPath === 'require') {
            return requireFacade;
        }
        if (!dependencies.hasOwnProperty(dependencyPath)) {
            throw 'Missing or illegal dependency "' + dependencyPath + '"';
        }
        return dependencies[dependencyPath];
    };
    jasmine.getEnv().module = module;
    jasmine.getEnv().modulePath = moduleName;

    return module;
}

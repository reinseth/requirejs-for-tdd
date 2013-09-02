// src/modules/SomeModule.js
define(function (require) {
    var Service = require('services/SomeService');

    return {
        doStuff: function (params) {
            return Service.doIt(params);
        }
    };
});

// spec/modules/SomeModuleSpec.js
describe('modules/SomeModule', function () {
    var SomeModule = require('modules/SomeModule');

    it('does stuff', function () {
        var params = {param1: "...", param2: "..."};
        expect(SomeModule.doStuff(params)).toEqual(something);
    });
});
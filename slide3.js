// spec/modules/SomeModuleSpec.js
describe('modules/SomeModule', function () {
    var SomeModule = require('modules/SomeModule'),
        Service = require('services/SomeService');

    it('does stuff', function () {
        // Arrange
        var params = {param1: "...", param2: "..."};
        var mockedResult = {};

        spyOn(Service, 'doIt').andCall(function (arg) {
            if (arg === params) return mockedResult;
            return null;
        });

        // Act
        var result = SomeModule.doStuff(params);

        // Assert
        expect(result).toBe(mockedResult);
    });
});
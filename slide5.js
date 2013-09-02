// spec/modules/SomeModuleSpec.js
describe('modules/SomeModule', function () {
    var SomeModule,
        ServiceMock;

    beforeEach(function () {
        SomeModule = autoMock('modules/SomeModule');
        ServiceMock = getMockFor('services/SomeService')
    });

    it('does stuff', function () {
        // Arrange
        var params = {param1: "...", param2: "..."};
        var mockedResult = {};

        when(ServiceMock.doIt).isCalledWith(params).thenReturn(mockedResult);

        // Act
        var result = SomeModule.doStuff(params);

        // Assert
        expect(result).toBe(mockedResult);
    });
});
// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, tilViewModelMock;

    beforeEach(function () {/*...*/});

    it('henter timer fra TimelisteService', function () {
        // Arrange
        var år = 2013;
        var måned = 9;
        var mockTimer = [/*...*/];
        var mockResultat = [/*...*/];

        spyOn(Service, 'hentTimer').andCallFake(function (arg1, arg2) {
            if (arg1 === år && arg2 === måned)
                return mockTimer;
            return null;
        });

        tilViewModelMock.andCallFake(function (arg1) {
            if (arg1 === mockTimer) return mockResultat;
            return null;
        });

        // Act
        var resultat = Timeliste.timer(år, måned);

        // Assert
        expect(resultat).toBe(mockResultat);
    });
});
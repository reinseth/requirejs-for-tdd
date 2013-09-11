// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, tilViewModel;

    beforeEach(function () {
        Timeliste = autoMock('modules/Timeliste');
        Service = getMockFor('services/TimelisteService');
        tilViewModel = getMockFor('helpers/tilViewModel');
    });

    it('henter timer fra TimelisteService', function () {
        // Arrange
        var år = 2013;
        var måned = 9;
        var mockTimer = [/*...*/];
        var mockResultat = [/*...*/];

        when(Service.hentTimer)
            .isCalledWith(år, måned).thenReturn(mockTimer);

        when(tilViewModel)
            .isCalledWith(mockTimer).thenReturn(mockResultat);

        // Act
        var resultat = Timeliste.timer(år, måned);

        // Assert
        expect(resultat).toBe(mockResultat);
    });
});
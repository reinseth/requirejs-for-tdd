// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, ServiceMock, transformMock;

    beforeEach(function () {
        Timeliste = autoMock('modules/Timeliste');
        ServiceMock = getMockFor('service/TimelisteService');
        transformMock = getMockFor('helpers/transformTimeføring');
    });

    it('henter timer fra TimelisteService', function () {
        // Arrange
        var år = 2013;
        var måned = 9;
        var mockTimer = [/*...*/];
        var mockResultat = [/*...*/];

        when(ServiceMock.hentTimer)
            .isCalledWith(år, måned).thenReturn(mockTimer);

        when(transformMock)
            .isCalledWith(mockTimer).thenReturn(mockResultat);

        // Act
        var resultat = Timeliste.timer(år, måned);

        // Assert
        expect(resultat).toBe(mockResultat);
    });
});
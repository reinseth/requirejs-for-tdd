// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste = require('modules/Timeliste'),
        Service = require('services/TimelisteService');

    it('henter timer fra TimelisteService', function () {
        // Arrange
        var år = 2013;
        var måned = 9;
        var mockResultat = {};

        spyOn(Service, 'hentTimer');
        when(Service.hentTimer)
            .isCalledWith(år, måned).thenReturn(mockResultat);

        // Act
        var resultat = Timeliste.timer(år, måned);

        // Assert
        expect(resultat).toBe(mockResultat);
    });
});
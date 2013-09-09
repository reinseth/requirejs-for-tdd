// src/modules/Timeliste.js
define(function (require) {
    var TimelisteService = require('services/TimelisteService'),
        transform = require('helpers/transformTimeføring');

    return {
        timer: function (år, måned) {
            return transform(TimelisteService.hentTimer(måned, år));
        }
    };
});


// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste = require('modules/Timeliste'),
        Service = require('services/TimelisteService'),
        transform = require('helpers/transformTimeføring');

    it('henter timer fra TimelisteService', function () {
        // Arrange
        // (...)

        spyOn(transform, ???);

        spyOn(Service, 'hentTimer');
        when(Service.hentTimer)
            .isCalledWith(år, måned).thenReturn(mockResultat);

        // (...)
    });
});

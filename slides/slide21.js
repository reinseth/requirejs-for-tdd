// src/modules/Timeliste.js
define(function (require) {
    var TimelisteService = require('services/TimelisteService'),
        tilViewModel = require('helpers/tilViewModel');

    return {
        timer: function (år, måned) {
            return tilViewModel(TimelisteService.hentTimer(år, måned));
        }
    };
});

// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, tilViewModel;

    beforeEach(function () {
        Timeliste = require('modules/Timeliste');
        Service = require('services/TimelisteService');
        tilViewModel = require('helpers/tilViewModel');
    });

    it('henter timer fra TimelisteService', function () {/*...*/});
});


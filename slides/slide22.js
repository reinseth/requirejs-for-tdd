



/**
 * Utfordringer:
 * - tilstand
 * - initialisering
 * - rene funksjoner
 */


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
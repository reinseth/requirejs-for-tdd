// src/modules/Timeliste.js
define(function (require) {
    var TimelisteService = require('services/TimelisteService');

    return {
        timer: function (år, måned) {
            return TimelisteService.hentTimer(år, måned);
        }
    };
});

// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste = require('modules/Timeliste');

    it('henter timer fra TimelisteService', function () {
        expect(Timeliste.timer(2013, 9)).toBe(???);
    });
});
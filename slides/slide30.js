// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, tilViewModel;

    beforeEach(function () {
        Service = require('services/TimelisteService');
        tilViewModel = jasmine.createSpy();

        var requireFacade = function (dep) {
            if (dep === 'helpers/tilViewModel')
                return tilViewModel;
            return require(dep);
        };

        var TimelisteFactory = require('factory!modules/Timeliste');
        Timeliste = TimelisteFactory(requireFacade);
    });

    it('henter timer fra TimelisteService', function () {/*...*/})
});

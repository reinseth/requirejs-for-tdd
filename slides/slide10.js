// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, tilViewModelMock;

    beforeEach(function () {
        Service = require('services/TimelisteService');
        tilViewModelMock = jasmine.createSpy();

        var requireFacade = function (dep) {
            if (dep === 'helpers/tilViewModel')
                return tilViewModelMock;
            return require(dep);
        };

        var TimelisteFactory = require('factory!modules/Timeliste');
        Timeliste = TimelisteFactory(requireFacade);
    });

    it('henter timer fra TimelisteService', function () {/*...*/})
});

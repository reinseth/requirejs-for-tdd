// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, transformMock;

    beforeEach(function () {
        Service = require('modules/Services');
        transformMock = jasmine.createSpy();

        var requireFacade = function (dep) {
            if (dep === 'helpers/transformTimeføring')
                return transformMock;
            return require(dep);
        };

        var TimelisteFactory = require('factory!modules/Timeliste');
        Timeliste = TimelisteFactory(requireFacade);
    });

    // (...)
});

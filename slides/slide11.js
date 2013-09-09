// spec/modules/TimelisteSpec.js
describe('modules/Timeliste', function () {
    var Timeliste, Service, transformMock;

    beforeEach(function () {
        Service = require('modules/Services');
        transformMock = jasmine.createSpy();

        var Timeliste = isolate('modules/Timeliste', {
            mocks: {
                'helpers/transformTimeføring': transformMock
            }
        });
    });

    // (...)
});
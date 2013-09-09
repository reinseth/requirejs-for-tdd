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


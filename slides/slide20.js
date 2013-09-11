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



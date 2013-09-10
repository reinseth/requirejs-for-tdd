// src/modules/Timeliste.js
define(function (require) {
    var TimelisteService = require('services/TimelisteService');

    return {
        timer: function (år, måned) {
            return TimelisteService.hentTimer(år, måned);
        }
    };
});

define(function () {
    return {
        hentTimer: function (år, måned) {
            return [
                {id: 1, dato: new Date(år, måned - 1, 1), timer: 7.5},
                {id: 2, dato: new Date(år, måned - 1, 2), timer: 7.5},
                {id: 3, dato: new Date(år, måned - 1, 3), timer: 7.5},
            ]
        }
    }
});